import fs from 'fs';

export class CsvFileReader {
  // array of arrays with date, string...
  data: string[][] = [];

  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
    // returning something that has the exact same structure as the tuple MatchData
  }
}
