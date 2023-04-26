"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
// Argument of T -> MatchData
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            // into number
            parseInt(row[3]),
            parseInt(row[4]),
            // into any possible value of MatchResult enum
            row[5],
            // stays string
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
