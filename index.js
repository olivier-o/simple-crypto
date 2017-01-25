#!/usr/bin/env node
var program = require('commander');
var {encode, decode} = require ('./dist/index')

program
  .version('0.0.1')
  .usage(' -e <val> | -d <val')
  .option('-e, --encode [val]', 'Key in a number [0]')
  .option('-d, --decode [val]', 'Key in an encoded value [7F7F]')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
      program.outputHelp();
}

if (program.encode) console.log("Encode: ", program.encode, " => ", encode(program.encode));
if (program.decode) console.log("Decode: ", program.decode, " => ", decode(program.decode));

