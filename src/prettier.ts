import { copyFileSync } from 'fs'
import { resolve } from 'path'

const setup = (projectPath: string) => {
  const prettierTemplatePath = resolve(__dirname, '../templates/prettier.json')
  const prettierConfigPath = resolve(projectPath, '.prettierrc')

  try {
    copyFileSync(prettierTemplatePath, prettierConfigPath)
    console.log('Added .prettierrc file.')
  } catch (error) {
    console.error('Error copying .prettierrc file:', error)
  }
}

export default { setup }
