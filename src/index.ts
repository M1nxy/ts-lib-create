#!/usr/bin/env node
import { readdirSync, existsSync, copySync } from 'fs-extra';
import { join } from 'path';
import argv from 'minimist';

const args = argv(process.argv.slice(2))
const projectName = args["_"].join('-').toLowerCase()
const projectPath = projectName ? join(process.cwd(), projectName) : process.cwd()

function copyTemplate(projectPath){
	if(existsSync(projectPath) && readdirSync(projectPath).length > 0 && !args["f"]) {
		return console.log('Directory already exists and is not empty\nUsage: ts-lib-create <project-name>')
	} else {
		copySync(join(__dirname+ "/template"), projectPath)
		console.log(`Created project in: ${projectPath}`)
	}
}

copyTemplate(projectPath)
