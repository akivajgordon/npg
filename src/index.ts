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

const main = () => {
  const projectPath = getProjectPath()

  makeProjectDir(projectPath)

  initializeGit(projectPath)

  addGitIgnore(projectPath)

  npmInit(projectPath)
}

main()

function npmInit(projectPath: string) {
  try {
    const initFile = resolve(__dirname, '../templates/npm-init.json')
    const npmInitContents = readFileSync(initFile, 'utf8')

    writeFileSync(path.join(projectPath, 'package.json'), npmInitContents)
    console.log('Initialized a new package.json file.')
  } catch (err) {
    console.error('Error initializing package.json:', err)
    process.exit(1)
  }
}

function addGitIgnore(projectPath: string) {
  // Copy the gitignore template to the new project directory
  const gitignoreTemplatePath = resolve(__dirname, '../templates/gitignore')
  const gitignorePath = resolve(projectPath, '.gitignore')

  try {
    copyFileSync(gitignoreTemplatePath, gitignorePath)
    console.log('Added .gitignore file.')
  } catch (error) {
    console.error('Error copying .gitignore file:', error)
  }
}

function initializeGit(projectPath: string) {
  try {
    execSync('git init', { cwd: projectPath })
    console.log('Initialized a new Git repository.')
  } catch (error) {
    console.error('Error initializing Git repository:', error)
  }
}

function makeProjectDir(projectPath: string) {
  const projectName = basename(projectPath)

  // Create the new project directory
  mkdirSync(projectPath)
  console.log(`Project directory "${projectName}" created at ${projectPath}.`)
}

function getProjectPath() {
  // Get the project name from command line arguments
  const projectPath = process.argv[2]

  if (!projectPath) {
    console.error('Please provide a project name.')
    process.exit(1)
  }

  // Resolve the full path of the new project directory
  const resolvedProjectPath = resolve(process.cwd(), projectPath)

  if (existsSync(resolvedProjectPath)) {
    console.error(`Error: Directory or file "${projectPath}" already exists.`)
    process.exit(1)
  }

  return resolvedProjectPath
}
