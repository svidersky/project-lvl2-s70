#!/usr/bin/env node

import program from 'commander';

const jsonBefore = 'before.json';

JSON.parse(jsonBefore, (key, value) => {
  console.log(key); // log the current property name, the last is "".
  return value;     // return the unchanged property value.
});

program
  .version('1.0.3')
  .arguments('<first_config> <second_config>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .parse(process.argv);
