#!/usr/bin/env node

const program = require('commander');

program
  .version('0.0.1')
  .usage('[options] <first_config> <second_config>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .parse(process.argv);
