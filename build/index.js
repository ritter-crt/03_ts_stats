"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Matchreader_1 = require("./Matchreader");
const MatchResult_1 = require("./MatchResult");
// readFileSync we can read any time of file
// utf-8 -> of content we expect
// parse into useable data structure
const reader = new Matchreader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
