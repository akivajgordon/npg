# npg - Node Project Generator

## Description

**npg** is a super opinionated CLI that creates a new Node.js TypeScript project with the following setup:

1. a git repository with a Node-appropriate .gitignore file
2. prettier (without semicolons of course)
3. npm scripts, including a `dev` script that reruns the application whenever a change to the source is detected (via nodemon)
4. (TODO) .env support
5. (TODO) CI/CD on GitHub

## Usage

```sh
npg my-proj
```
