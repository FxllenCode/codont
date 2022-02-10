#! /usr/bin/env node

const yargs = require('yargs');
const { argv } = require('yargs');
const main = require('yargs');
const utils = require('./utils');

const usage = '\nUsage: codont <cmd> [args]'; const options = main
  .usage(usage)
  .option('l', {
    alias: 'languages',
    describe: 'List all supported languages.',
    type: 'boolean',
    demandOption: false,
  })
  .command('translate  [RNA] [full]', 'Translates mRNA to protien. ', (yargs) => {
    yargs.positional('RNA', {
      describe: 'RNA sequence to translate.',
      type: 'string',
      default: '',
    });
    yargs.positional('full', {
      describe: 'Show full name of amino acid.',
      type: 'boolean',
      default: false,
    });
  }, (argv) => {
    const res = utils.rnaTranslate(argv.RNA, argv.full);
    console.log(res);
  })
  .command('transcribe [DNA]', 'Transcribes Anti-Sense DNA to mRNA.', (yargs) => {
    yargs.positional('DNA', {
      describe: 'DNA sequence to transcribe.',
      type: 'string',
      default: '',
    });
  }, (argv) => {
    const res = utils.dnaTranscribe(argv.DNA);
    console.log(res);
  })
  .command('replicate [DNA]', 'Replicates DNA', (yargs) => {
    yargs.positional('DNA', {
      describe: 'DNA sequence to replicate.',
      type: 'string',
      default: '',
    });
  }, (argv) => {
    const res = utils.dnaReplicate(argv.DNA);
    console.log(res);
  })
  .command('compare [RNA1] [RNA2]', 'Compares RNA strands and looks for mutations', (yargs) => {
    yargs.positional('RNA1', {
      describe: 'RNA sequence 1 to compare.',
      type: 'string',
      default: '',
    });
    yargs.positional('RNA2', {
      describe: 'RNA sequence 12 to compare.',
      type: 'string',
      default: '',
    });
  }, (argv) => {
    const res = utils.mutationCheck(argv.RNA1, argv.RNA2)
    console.log(res)
  })
  .help(true)
  .argv;
