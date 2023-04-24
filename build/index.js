"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
// readFileSync we can read any time of file
// utf-8 -> of content we expect
// parse into useable data structure
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
MatchResult.AwayWin;
MatchResult.HomeWin;
MatchResult.Draw;
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
