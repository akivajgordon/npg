#!/usr/bin/env node

import root from './root'
import npm from './npm'
import git from './git'
import prettier from './prettier'
import typescript from './typescript'
import src from './src'

const main = () => {
  const path = root.path()

  root.mkdir(path)

  git.init(path)
  git.ignore(path)

  npm.init(path)
  npm.installDependencies(path)

  typescript.init(path)

  prettier.setup(path)
  prettier.ignore(path)

  src.init(path)
}

main()
