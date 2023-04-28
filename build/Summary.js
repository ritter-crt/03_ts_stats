"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
// When we  create an instance of class Summary
// we have to pass in to the constructor one of the Analysis objects
// and one of the Report objects#
// composition HAS references to other objects
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
// new Summary(new WinsAnayis(), new ConsoleReport())
