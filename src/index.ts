#!/usr/bin/env node

import root from './root'
import npm from './npm'
import git from './git'
import prettier from './prettier'
import typescript from './typescript'
import src from './src'
import cli from './cli'

const main = async (projectPath: string, options: { express: boolean }) => {
  const { express } = options
  const path = root.path(projectPath)

  root.mkdir(path)

  git.init(path)
  git.ignore(path)

  npm.init(path)
  npm.installDependencies(path, {
    express,
  })

  typescript.init(path)

  prettier.setup(path)
  prettier.ignore(path)

  src.init(path, { express })
}

cli.action((projectPath, options) => {
  return main(projectPath, options)
})

cli.parseAsync()
