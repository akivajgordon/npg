import { existsSync, mkdirSync } from 'fs'
import { basename, resolve } from 'path'
import logger from '@akivajgordon/logger'

function makeProjectDir(projectPath: string) {
  const projName = projectName(projectPath)

  // Create the new project directory
  mkdirSync(projectPath)
  logger.info(
    '30d28338',
    `Project directory "${projName}" created at ${projectPath}.`,
  )
}

function projectName(projectPath: string) {
  return basename(projectPath)
}

function getProjectPath() {
  // Get the project name from command line arguments
  const projectPath = process.argv[2]

  if (!projectPath) {
    logger.info('0a3a680c')
    logger.error('0a3a680c', 'Please provide a project name.')
    process.exit(1)
  }

  // Resolve the full path of the new project directory
  const resolvedProjectPath = resolve(process.cwd(), projectPath)

  if (existsSync(resolvedProjectPath)) {
    logger.error(
      '3f9d884a',
      `Error: Directory or file "${projectPath}" already exists.`,
    )
    process.exit(1)
  }

  return resolvedProjectPath
}

export default {
  path: getProjectPath,
  name: projectName,
  mkdir: makeProjectDir,
}
