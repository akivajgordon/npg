import { Command } from 'commander'

const program = new Command()

program
  .name('npg')
  .description('npg - node project generator')
  // .version('1.0.0')
  .argument('<project-path>', 'path to the project to be generated')
  .option('--express', 'generate sample express file as main source')

export default program
