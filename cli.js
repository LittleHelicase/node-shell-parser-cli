#!/usr/bin/env node

var nsp = require('node-shell-parser')
var getStdin = require('get-stdin')
var program = require('commander')
var fs = require('fs')

program
  .version(JSON.parse(fs.readFileSync(__dirname + '/package.json'))['version'])
  .option('-p, --pretty', 'Pretty print the output')
  .parse(process.argv)

getStdin().then(function (stdin) {
  if (program.pretty) {
    console.log(JSON.stringify(nsp(stdin), null, 2))
  } else {
    console.log(JSON.stringify(nsp(stdin)))
  }
})

