import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'path'

const createIndexTs = (projectPath: string) => {
  const srcPath = resolve(projectPath, 'src')
  const indexTsTemplatePath = resolve(__dirname, '../templates/index.ts')
  const indexTsPath = resolve(srcPath, 'index.ts')

  mkdirSync(srcPath)
  copyFileSync(indexTsTemplatePath, indexTsPath)
  console.log('Created src/index.ts with "Hello, World!" message.')
}

export default { init: createIndexTs }
