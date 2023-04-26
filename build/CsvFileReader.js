"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// // to make CsvFileReader reusable it must have no reference to MatchData
// -> Generic Class <T>
// T will be replaced by MatchData
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // array of arrays with date, string...
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
            // reference to helper method to mapRow without invoking it ()
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
