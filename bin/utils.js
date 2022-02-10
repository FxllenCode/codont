const chalk = require('chalk');
const codons = require('./codons');

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

// replicate DNA to DNA using base paring rules (see https://en.wikipedia.org/wiki/Base_pairing_in_DNA)
function dnaReplicate(dna) {
  let result = '';
  for (let i = 0; i < dna.length; i++) {
    const c = dna.charAt(i);
    if (c === 'U') {
      return warning('That\'s not a DNA sequence!');
    }
    if (c === 'A') {
      result += 'T';
    } else if (c === 'T') {
      result += 'A';
    } else if (c === 'C') {
      result += 'G';
    } else if (c === 'G') {
      result += 'C';
    } else {
      result += c;
    }
  }
  return result;
}

// transcribe DNA to RNA using base baring rules (see https://en.wikipedia.org/wiki/Base_pairing_in_DNA)
function dnaTranscribe(dna) {
  let result = '';
  for (let i = 0; i < dna.length; i++) {
    const c = dna.charAt(i);
    if (c === 'U') {
      return warning('That\'s not a DNA sequence!');
    }
    if (c === 'A') {
      result += 'U';
    } else if (c === 'T') {
      result += 'A';
    } else if (c === 'C') {
      result += 'G';
    } else if (c === 'G') {
      result += 'C';
    } else {
      result += c;
    }
  }
  return result;
}

// translate RNA to protien using codons from codons.js
function rnaTranslate(rna, full) {
  let result = '';
  for (let i = 0; i < rna.length; i += 3) {
    const codon = rna.substring(i, i + 3);
    const aminoAcid = codons.find((c) => c.codon === codon);
    if (aminoAcid) {
      if (full) {
        result += `${aminoAcid.aminoAcid} (${aminoAcid.abbreviation}) `;
      } else {
        result += `${aminoAcid.abbreviation} `;
      }
    } else {
      result += ' X';
    }
  }
  return result;
}

function mutationCheck(rna1, rna2) {
  if (rna1.length !== rna2.length) {
    return warning('RNA sequences must be the same length! This may change in the future.');
  }
  for (let i = 0; i < rna1.length; i += 3) {
    const codon1 = rna1.substring(i, i + 3);
    const codon2 = rna1.substring(i, i + 3);
    const amindAcid1 = codons.find((c) => c.codon === codon1);
    const amindAcid2 = codons.find((c) => c.codon === codon2);
    
    if (codon1 !== codon2 && amindAcid1.aminoAcid !== amindAcid2.aminoAcid) {
        return()
  }
}
module.exports = {
  dnaReplicate,
  dnaTranscribe,
  rnaTranslate,
};

// accept two RNA sequences and compare them, and detect mutations based on either silent, antisense, or missence
