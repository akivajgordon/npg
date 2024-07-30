# npg - Node Project Generator

## Description

**npg** is a super opinionated CLI that creates a new Node.js TypeScript project with the following setup:

1. a git repository with a Node-appropriate .gitignore file
2. prettier (without semicolons of course)
3. npm scripts, including a `dev` script that reruns the application whenever a change to the source is detected (via nodemon)
4. (TODO) .env support
5. (TODO) CI/CD on GitHub

## Usage

Run using `npx`:

```sh
npx @akivajgordon/npg /path/to/my-new-proj
```

...or install globally and run:

```sh
npm install -g @akivajgordon/npg
npg /path/to/my-new-proj
```

Full usage: 

```
Usage: npg [options] <project-path>

npg - node project generator

Arguments:
  project-path  path to the project to be generated

Options:
  --express     generate sample express file as main source
  -h, --help    display help for command
```

Jump into that newly created directory:

```sh
cd /path/to/my-new-proj
```

Now you can start dev mode:

```sh
npm run dev
```

Leave that terminal running and watch as it rebuilds and restarts your program whenever you edit your source code. Now the project is yours, so happy coding!
