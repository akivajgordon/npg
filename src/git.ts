import { execSync } from 'node:child_process'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

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

export default { init: initializeGit, ignore: addGitIgnore }
