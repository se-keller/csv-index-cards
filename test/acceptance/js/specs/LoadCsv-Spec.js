phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a readable csv url WHEN loading THEN first question is shown', function suite(test) {
    csvLoadPage.startOnCsvLoadPage()
    csvLoadPage.fillCsvUrlWithLocalTestCsvUrl()

    csvLoadPage.loadCsv()
    
    questionPage.checkThatQuestionIsShown()

    done(test)   
});

casper.test.begin('GIVEN an unreadable csv url WHEN loading THEN error message is shown', function suite(test) {
    csvLoadPage.startOnCsvLoadPage()
    csvLoadPage.fillCsvUrlWithUnloadableCsvUrl()

    csvLoadPage.loadCsv()
    
    csvLoadPage.checkThatErrorIsShown()

    done(test)
});

casper.test.begin('GIVEN a readable csv url WHEN hitting enter THEN the csv is loaded', function suite(test) {
    csvLoadPage.startOnCsvLoadPage()
    csvLoadPage.fillCsvUrlWithLocalTestCsvUrl()

    csvLoadPage.hitEnter()
    
    questionPage.checkThatQuestionIsShown()

    done(test)
});

casper.test.begin('GIVEN the web app is called WHEN the csv parameter is used with a readable csv url THEN the csv is loaded', function suite(test) {
    csvLoadPage.startWithCsvUrlParameterOfLocalTestCsvUrl()
    
    questionPage.checkThatQuestionIsShown()

    done(test)
});
