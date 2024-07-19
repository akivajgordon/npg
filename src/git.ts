import { execSync } from 'node:child_process'
import { copyTemplate } from './copy'

function addGitIgnore(projectPath: string) {
  return copyTemplate(projectPath, 'gitignore', '.gitignore')
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
