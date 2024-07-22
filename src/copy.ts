import { copyFileSync } from 'node:fs'
import { resolve } from 'path'
import logger from '@akivajgordon/logger'

export function copyTemplate(root: string, srcTemplate: string, dest: string) {
  const templatePath = resolve(__dirname, `../templates/${srcTemplate}`)
  const destinationPath = resolve(root, dest)

  try {
    copyFileSync(templatePath, destinationPath)
    logger.info('06325392', `Added ${dest} file.`)
  } catch (error) {
    logger.error('f5565a7e', `Error copying ${dest} file:`, error)
  }
}
