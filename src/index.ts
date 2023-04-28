import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

// Create an object that satisfies the "DataReader" interface
const cvsFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something
// satisfying the "DataReader" interface
const matchReader = new MatchReader(cvsFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
