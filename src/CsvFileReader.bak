import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// new tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  // array of arrays with date, string...
  data: MatchData[] = [];

  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      // returning something that has the exact same structure as the tuple MatchData
      .map((row: string[]): MatchData => {
        return [
          // converting string into useable data
          // into date
          dateStringToDate(row[0]),
          // stays string
          row[1],
          row[2],
          // into number
          parseInt(row[3]),
          parseInt(row[4]),
          // into any possible value of MatchResult enum
          row[5] as MatchResult,
          // stays string
          row[6],
        ];
      });
  }
}
