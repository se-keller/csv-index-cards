phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN the next question is shown WHEN shuffel deck THEN the progress is resetted', function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    questionPage.goToNextQuestion()
    
    questionPage.shuffelDeck()
    
    questionPage.checkThatProgressIsResetted()

    done(test)   
});



