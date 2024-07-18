#!/usr/bin/env node

import root from './root'
import npm from './npm'
import git from './git'

const main = () => {
  const path = root.path()

  root.mkdir(path)

  git.init(path)
  git.ignore(path)

  npm.init(path)
}

main()
