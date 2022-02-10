const codons = [
  {
    codon: 'UUU',
    aminoAcid: 'Phenylalanine',
    abbreviation: 'Phe',
  },
  {
    codon: 'UUC',
    aminoAcid: 'Phenylalanine',
    abbreviation: 'Phe',
  },
  {
    codon: 'UUA',
    aminoAcid: 'Leucine',
    abbreviation: 'Leu',
  },
  {
    codon: 'UUG',
    aminoAcid: 'Leucine',
    abbreviation: 'Leu',
  },
  {
    codon: 'UCU',
    aminoAcid: 'Serine',
    abbreviation: 'Ser',
  },
  {
    codon: 'UCC',
    aminoAcid: 'Serine',
    abbreviation: 'Ser',
  },
  {
    codon: 'UCA',
    aminoAcid: 'Serine',
    abbreviation: 'Ser',
  },
  {
    codon: 'UCG',
    aminoAcid: 'Serine',
    abbreviation: 'Ser',
  },
  {
    codon: 'UAU',
    aminoAcid: 'Tyrosine',
    abbreviation: 'Tyr',
  },
  {
    codon: 'UAC',
    aminoAcid: 'Tyrosine',
    abbreviation: 'Tyr',
  },
  {
    codon: 'UGU',
    aminoAcid: 'Cysteine',
    abbreviation: 'Cys',
  },
  {
    codon: 'UGC',
    aminoAcid: 'Cysteine',
    abbreviation: 'Cys',
  },
  {
    codon: 'UGG',
    aminoAcid: 'Tryptophan',
    abbreviation: 'Trp',
  },
  {
    codon: 'UAA',
    aminoAcid: 'STOP',
    abbreviation: 'STOP',
  },
  {
    codon: 'UAG',
    aminoAcid: 'STOP',
    abbreviation: 'STOP',
  },
  {
    codon: 'UGA',
    aminoAcid: 'STOP',
    abbreviation: 'STOP',
  },

  {
    codon: 'AUG',
    aminoAcid: 'Methionine',
    abbreviation: 'Met',
  },
  {
    codon: 'AUA',
    aminoAcid: 'Isoleucine',
    abbreviation: 'Ile',
  },
  {
    codon: 'AUC',
    aminoAcid: 'Isoleucine',
    abbreviation: 'Ile',
  },
  {
    codon: 'AUU',
    aminoAcid: 'Isoleucine',
    abbreviation: 'Ile',
  },
  {
    codon: 'ACA',
    aminoAcid: 'Threonine',
    abbreviation: 'Thr',
  },
  {
    codon: 'ACC',
    aminoAcid: 'Threonine',
    abbreviation: 'Thr',
  },
  {
    codon: 'ACG',
    aminoAcid: 'Threonine',
    abbreviation: 'Thr',
  },
  {
    codon: 'ACU',
    aminoAcid: 'Threonine',
    abbreviation: 'Thr',
  },
  {
    codon: 'AGU',
    aminoAcid: 'Serine',
    abbreviation: 'Ser',
  },
  {
    codon: 'AGC',
    aminoAcid: 'Serine',
    abbreviation: 'Ser',
  },
  {
    codon: 'AGA',
    aminoAcid: 'Arginine',
    abbreviation: 'Arg',
  },
  {
    codon: 'AGG',
    aminoAcid: 'Arginine',
    abbreviation: 'Arg',
  },
  {
    codon: 'AAU',
    aminoAcid: 'Asparagine',
    abbreviation: 'Asn',
  },
  {
    codon: 'AAC',
    aminoAcid: 'Asparagine',
    abbreviation: 'Asn',
  },
  {
    codon: 'AAA',
    aminoAcid: 'Lysine',
    abbreviation: 'Lys',
  },
  {
    codon: 'AAG',
    aminoAcid: 'Lysine',
    abbreviation: 'Lys',
  },
  {
    codon: 'CUU',
    aminoAcid: 'Leucine',
    abbreviation: 'Leu',
  },
  {
    codon: 'CUC',
    aminoAcid: 'Leucine',
    abbreviation: 'Leu',
  },
  {
    codon: 'CUA',
    aminoAcid: 'Leucine',
    abbreviation: 'Leu',
  },
  {
    codon: 'CUG',
    aminoAcid: 'Leucine',
    abbreviation: 'Leu',
  },
  {
    codon: 'CCU',
    aminoAcid: 'Proline',
    abbreviation: 'Pro',
  },
  {
    codon: 'CCC',
    aminoAcid: 'Proline',
    abbreviation: 'Pro',
  },
  {
    codon: 'CCA',
    aminoAcid: 'Proline',
    abbreviation: 'Pro',
  },
  {
    codon: 'CCG',
    aminoAcid: 'Proline',
    abbreviation: 'Pro',
  },
  {
    codon: 'CAU',
    aminoAcid: 'Histidine',
    abbreviation: 'His',
  },
  {
    codon: 'CAC',
    aminoAcid: 'Histidine',
    abbreviation: 'His',
  },
  {
    codon: 'CAA',
    aminoAcid: 'Glutamine',
    abbreviation: 'Gln',
  },
  {
    codon: 'CAG',
    aminoAcid: 'Glutamine',
    abbreviation: 'Gln',
  },
  {
    codon: 'CGU',
    aminoAcid: 'Arginine',
    abbreviation: 'Arg',
  },
  {
    codon: 'CGC',
    aminoAcid: 'Arginine',
    abbreviation: 'Arg',
  },
  {
    codon: 'CGA',
    aminoAcid: 'Arginine',
    abbreviation: 'Arg',
  },
  {
    codon: 'CGG',
    aminoAcid: 'Arginine',
    abbreviation: 'Arg',
  },
  {
    codon: 'GAA',
    aminoAcid: 'Glutamic Acid',
    abbreviation: 'Glu',
  },
  {
    codon: 'GAG',
    aminoAcid: 'Glutamic Acid',
    abbreviation: 'Glu',
  },
  {
    codon: 'GAC',
    aminoAcid: 'Aspartic Acid',
    abbreviation: 'Asp',
  },
  {
    codon: 'GAU',
    aminoAcid: 'Aspartic Acid',
    abbreviation: 'Asp',
  },
  {
    codon: 'GGA',
    aminoAcid: 'Glycine',
    abbreviation: 'Gly',
  },
  {
    codon: 'GGG',
    aminoAcid: 'Glycine',
    abbreviation: 'Gly',
  },
  {
    codon: 'GGC',
    aminoAcid: 'Glycine',
    abbreviation: 'Gly',
  },
  {
    codon: 'GGU',
    aminoAcid: 'Glycine',
    abbreviation: 'Gly',
  },
  {
    codon: 'GCA',
    aminoAcid: 'Alanine',
    abbreviation: 'Ala',
  },
  {
    codon: 'GCC',
    aminoAcid: 'Alanine',
    abbreviation: 'Ala',
  },
  {
    codon: 'GCG',
    aminoAcid: 'Alanine',
    abbreviation: 'Ala',
  },
  {
    codon: 'GCU',
    aminoAcid: 'Alanine',
    abbreviation: 'Ala',
  },
  {
    codon: 'GUA',
    aminoAcid: 'Valine',
    abbreviation: 'Val',
  },
  {
    codon: 'GUC',
    aminoAcid: 'Valine',
    abbreviation: 'Val',
  },
  {
    codon: 'GUG',
    aminoAcid: 'Valine',
    abbreviation: 'Val',
  },
  {
    codon: 'GUU',
    aminoAcid: 'Valine',
    abbreviation: 'Val',
  },

];

module.exports = codons;
