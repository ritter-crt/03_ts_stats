import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Create an object that satisfies the "DataReader" interface
// const cvsFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something
// satisfying the "DataReader" interface
// const matchReader = new MatchReader(cvsFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
