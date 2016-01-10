phantom.page.injectJs('page-objects/CsvLoadPage.js')
phantom.page.injectJs('page-objects/QuestionPage.js')
phantom.page.injectJs('page-objects/AnswerPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()
var answerPage = new AnswerPage()

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

casper.test.begin('Can flip to answer and back to question again', 2, function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    
    questionPage.showBackOfCard()
    
    answerPage.checkThatCardBackIsShown()

    answerPage.showFrontOfCard()

    questionPage.checkThatCardFrontIsShown()
    
    done(test)
});