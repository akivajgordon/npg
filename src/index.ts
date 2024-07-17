#!/usr/bin/env node

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'fs'
import { execSync } from 'node:child_process'
import path, { basename, resolve } from 'path'

// Get the project name from command line arguments
const projectPath = process.argv[2]

if (!projectPath) {
  console.error('Please provide a project name.')
  process.exit(1)
}

const projectName = basename(projectPath)

// Resolve the full path of the new project directory
const resolvedProjectPath = resolve(process.cwd(), projectPath)

if (existsSync(resolvedProjectPath)) {
  console.error(`Error: Directory or file "${projectPath}" already exists.`)
  process.exit(1)
}

// Create the new project directory
mkdirSync(resolvedProjectPath)
console.log(
  `Project directory "${projectName}" created at ${resolvedProjectPath}.`,
)

try {
  execSync('git init', { cwd: resolvedProjectPath })
  console.log('Initialized a new Git repository.')
} catch (error) {
  console.error('Error initializing Git repository:', error)
}

// Copy the gitignore template to the new project directory
const gitignoreTemplatePath = resolve(__dirname, '../templates/gitignore')
const gitignorePath = resolve(projectPath, '.gitignore')

try {
  copyFileSync(gitignoreTemplatePath, gitignorePath)
  console.log('Added .gitignore file.')
} catch (error) {
  console.error('Error copying .gitignore file:', error)
}

try {
  // Initialize a new package.json file in the new project directory
  const initFile = resolve(__dirname, '../templates/npm-init.json')
  const npmInitContents = readFileSync(initFile, 'utf8')

  writeFileSync(path.join(projectPath, 'package.json'), npmInitContents)
  console.log('Initialized a new package.json file.')
} catch (err) {
  console.error('Error initializing package.json:', err)
  process.exit(1)
}
