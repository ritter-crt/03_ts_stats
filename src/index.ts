import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';

// readFileSync we can read any time of file
// utf-8 -> of content we expect

// parse into useable data structure
const reader = new CsvFileReader('football.csv');
reader.read();

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

MatchResult.AwayWin;
MatchResult.HomeWin;
MatchResult.Draw;

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
