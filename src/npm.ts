import { readFileSync, writeFileSync } from 'fs'
import { execSync } from 'node:child_process'
import path, { resolve } from 'path'

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

const installDependencies = (projectPath: string) => {
  const devDependencies = [
    'nodemon',
    'npm-run-all',
    'prettier',
    'typescript',
    '@types/node',
  ].join(' ')

  const dependencies = ['dotenv'].join(' ')

  try {
    console.log('Installing devDependencies...')
    execSync(`npm install --save-dev ${devDependencies}`, {
      cwd: projectPath,
      stdio: 'inherit',
    })

    console.log('Installing dependencies...')
    execSync(`npm install ${dependencies}`, {
      cwd: projectPath,
      stdio: 'inherit',
    })

    console.log('Dependencies installed.')
  } catch (error) {
    console.error('Error installing dependencies:', error)
    process.exit(1)
  }
}

export default { init: npmInit, installDependencies }
