import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'node:child_process'
import path, { resolve } from 'path'
import logger from '@akivajgordon/logger'
import root from './root'

function npmInit(projectPath: string) {
  try {
    const initFile = resolve(__dirname, '../templates/npm-init.json')
    const npmInitContents = readFileSync(initFile, 'utf8')

    const pkg = JSON.parse(npmInitContents)

    pkg.name = root.name(projectPath)

    writeFileSync(
      path.join(projectPath, 'package.json'),
      JSON.stringify(pkg, null, 2),
    )
    logger.info('2e9fb180', 'Initialized a new package.json file.')
  } catch (err) {
    logger.error('bbcad5d3', 'Error initializing package.json:', err)
    process.exit(1)
  }
}

const installDependencies = (
  projectPath: string,
  { express }: { express: boolean } = { express: false },
) => {
  const devDependenciesList = [
    'nodemon',
    'npm-run-all',
    'prettier',
    'typescript',
    '@types/node',
  ]

  if (express) devDependenciesList.push('@types/express')

  const devDependencies = devDependenciesList.join(' ')

  const dependenciesList = ['dotenv', '@akivajgordon/logger']

  if (express) dependenciesList.push('express')

  const dependencies = dependenciesList.join(' ')

  try {
    logger.info('703ee083', 'Installing devDependencies...')
    execSync(`npm install --save-dev ${devDependencies}`, {
      cwd: projectPath,
      stdio: 'inherit',
    })

    logger.info('1de04853', 'Installing dependencies...')
    execSync(`npm install ${dependencies}`, {
      cwd: projectPath,
      stdio: 'inherit',
    })

    logger.info('5203ef63', 'Dependencies installed.')
  } catch (error) {
    logger.error('b4ba9c40', 'Error installing dependencies:', error)
    process.exit(1)
  }
}

export default { init: npmInit, installDependencies }
