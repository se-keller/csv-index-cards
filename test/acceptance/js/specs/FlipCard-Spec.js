phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')
phantom.page.injectJs('js/page-objects/AnswerPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()
var answerPage = new AnswerPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a question is shown WHEN flip THEN answer is shown', 1, function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    
    questionPage.showAnswer()
    
    answerPage.checkThatAnswerIsShown()
    
    done(test)
});

casper.test.begin('GIVEN an answer is shown WHEN flip THEN question is shown', 1, function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()    
    questionPage.showAnswer()

    answerPage.showQuestion()

    questionPage.checkThatQuestionIsShown()
    
    done(test)
});