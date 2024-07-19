import { copyFileSync } from 'node:fs'
import { resolve } from 'path'

export function copyTemplate(root: string, srcTemplate: string, dest: string) {
  const templatePath = resolve(__dirname, `../templates/${srcTemplate}`)
  const destinationPath = resolve(root, dest)

  try {
    copyFileSync(templatePath, destinationPath)
    console.log(`Added ${dest} file.`)
  } catch (error) {
    console.error(`Error copying ${dest} file:`, error)
  }
}
