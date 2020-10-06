const fs = require('fs');
const path = require('path');

const language = 'ja';
const source = 'http://www.edrdg.org/wiki/index.php/Tanaka_Corpus';

const sentencesOutputPath = 'sentences.txt';
const approvedOutputPath = 'approved-sentences.txt';
const cvData = '/home/mkohler/Desktop/data';

const scPath = path.resolve(cvData, language, 'sentence-collector.json');

const sentenceInfo = require(scPath);
console.log(`${sentenceInfo.length} sentences found in total..`);

const withSource = sentenceInfo.filter((sentence) => sentence.source === source);
console.log(`${withSource.length} sentences found with this source...`);

const approved = withSource.filter((sentence) => sentence.approved);
console.log(`${approved.length} sentences found which are approved!`);

const sentences = withSource.map((sentence) => sentence.sentence);
fs.writeFileSync(sentencesOutputPath, sentences.join('\n'), 'utf8');

const approvedSentences = approved.map((sentence) => sentence.sentence);
fs.writeFileSync(approvedOutputPath, approvedSentences.join('\n'), 'utf8');
