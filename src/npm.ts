import { readFileSync, writeFileSync } from 'fs'
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

export default { init: npmInit }
