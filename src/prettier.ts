import { copyTemplate } from './copy'

export default {
  setup: (projectPath: string) => {
    copyTemplate(projectPath, `prettier.json`, '.prettierrc')
  },
  ignore: (projectPath: string) => {
    copyTemplate(projectPath, 'prettierignore', '.prettierignore')
  },
}
