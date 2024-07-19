import { mkdirSync } from 'node:fs'
import { copyTemplate } from './copy'
import { resolve, join } from 'node:path'

const createIndexTs = (projectPath: string) => {
  const srcPath = resolve(projectPath, 'src')
  mkdirSync(srcPath)

  copyTemplate(projectPath, 'index.ts', join('src', 'index.ts'))
}

export default { init: createIndexTs }
