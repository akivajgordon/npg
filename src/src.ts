import { mkdirSync } from 'node:fs'
import { copyTemplate } from './copy'
import { resolve, join } from 'node:path'

const createIndexTs = (
  projectPath: string,
  { express }: { express: boolean } = { express: false }
) => {
  const srcPath = resolve(projectPath, 'src')
  const templateFile = express ? 'express.txt' : 'index.ts'

  mkdirSync(srcPath)

  copyTemplate(projectPath, templateFile, join('src', 'index.ts'))
}

export default { init: createIndexTs }
