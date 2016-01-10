phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('Can load a local CSV file', 1, function suite(test) {
    csvLoadPage.startOnCsvLoadPage()
    csvLoadPage.fillCsvUrlWithLocalTestCsvUrl()

    csvLoadPage.loadCsv()
    
    questionPage.checkThatCardFrontIsShown()

    done(test)   
});

casper.test.begin('Cannot load CSV file, shows error message', 1, function suite(test) {
    csvLoadPage.startOnCsvLoadPage()
    csvLoadPage.fillCsvUrlWithUnloadableCsvUrl()

    csvLoadPage.loadCsv()
    
    csvLoadPage.checkThatErrorIsShown()

    done(test)
});

