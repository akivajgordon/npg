#!/usr/bin/env node

import { existsSync, mkdirSync } from 'fs'
import { execSync } from 'node:child_process'
import { basename, resolve } from 'path'

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
