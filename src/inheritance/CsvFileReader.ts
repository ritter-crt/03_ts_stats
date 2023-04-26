import fs from 'fs';

// // to make CsvFileReader reusable it must have no reference to MatchData
// -> Generic Class <T>
// T will be replaced by MatchData
export abstract class CsvFileReader<T> {
  // array of arrays with date, string...
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
        // reference to helper method to mapRow without invoking it ()
      })
      .map(this.mapRow);
  }
}
