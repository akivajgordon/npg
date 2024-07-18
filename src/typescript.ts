import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const initTsConfig = (projectPath: string) => {
  try {
    console.log('Initializing tsconfig.json...')
    execSync('npx tsc --init', { cwd: projectPath, stdio: 'inherit' })

    const tsConfigPath = resolve(projectPath, 'tsconfig.json')
    let tsConfig = JSON.parse(readFileSync(tsConfigPath, 'utf8'))

    tsConfig.compilerOptions = {
      ...tsConfig.compilerOptions,
      outDir: './build',
      rootDir: './src',
    }

    writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2))
    console.log('Updated tsconfig.json with outDir and rootDir.')
  } catch (error) {
    console.error('Error initializing tsconfig.json:', error)
    process.exit(1)
  }
}

export default { init: initTsConfig }
