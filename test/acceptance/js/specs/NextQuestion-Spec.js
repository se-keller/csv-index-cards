phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN some questions WHEN next THEN next question is shown', function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    
    questionPage.goToNextQuestion()
    
    questionPage.checkThatNextQuestionIsShown()
    
    done(test)
});

casper.test.begin('GIVEN the last question WHEN next THEN first question is shown', function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    questionPage.goToLastQuestion()

    questionPage.goToNextQuestion()
    
    questionPage.checkThatFirstQuestionIsShown()
    
    done(test)
});