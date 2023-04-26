import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

// new tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

// Argument of T -> MatchData
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
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
  }
}
