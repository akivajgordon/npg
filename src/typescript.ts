import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import logger from '@akivajgordon/logger'

const initTsConfig = (projectPath: string) => {
  try {
    logger.info('10cec765', 'Initializing tsconfig.json...')
    execSync('npx tsc --init', { cwd: projectPath, stdio: 'inherit' })

    const tsConfigPath = resolve(projectPath, 'tsconfig.json')
    const contents = readFileSync(tsConfigPath, 'utf8')
    let tsConfig = JSON.parse(stripJsonComments(contents))

    tsConfig.compilerOptions = {
      ...tsConfig.compilerOptions,
      outDir: './build',
      rootDir: './src',
    }

    writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2))
    logger.info('23614f1a', 'Updated tsconfig.json with outDir and rootDir.')
  } catch (error) {
    logger.error('ae2a3810', 'Error initializing tsconfig.json:', error)
    process.exit(1)
  }
}

export default { init: initTsConfig }

const stripJsonComments = (jsonString: string): string => {
  return jsonString.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '')
}
