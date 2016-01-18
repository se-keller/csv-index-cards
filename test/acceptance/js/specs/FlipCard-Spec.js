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

casper.test.begin('GIVEN a question is shown WHEN flip THEN first answer is shown', function suite(test) {
    csvLoadPage.startOnFlipMode()
    
    questionPage.showAnswer()
    
    answerPage.checkThatFirstAnswerIsShown()
    
    done(test)
});

casper.test.begin('GIVEN an answer is shown WHEN flip THEN question is shown', function suite(test) {
    csvLoadPage.startOnFlipMode()    
    questionPage.showAnswer()

    answerPage.showQuestion()

    questionPage.checkThatQuestionIsShown()
    
    done(test)
});