import { execSync } from 'node:child_process'
import { copyTemplate } from './copy'
import logger from '@akivajgordon/logger'

function addGitIgnore(projectPath: string) {
  return copyTemplate(projectPath, 'gitignore', '.gitignore')
}

function initializeGit(projectPath: string) {
  try {
    execSync('git init', { cwd: projectPath })
    logger.info('c77cd493', 'Initialized a new Git repository')
  } catch (error) {
    logger.error('02afe5bd', 'Error initializing Git repository:', error)
  }
}

export default { init: initializeGit, ignore: addGitIgnore }
