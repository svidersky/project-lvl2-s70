#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .usage('<first_config> <second_config>')
  .option('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .parse(process.argv);
