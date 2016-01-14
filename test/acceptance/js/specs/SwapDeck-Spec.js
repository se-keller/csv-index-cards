phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a question is shown WHEN swap deck THEN the answer is shown as question', function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()

    questionPage.swapDeck()
    
    questionPage.checkThatAnswerIsShownAsQuestion()

    done(test)   
});



