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

casper.test.begin('Can flip from question to answer', 1, function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    
    questionPage.showBackOfCard()
    
    answerPage.checkThatCardBackIsShown()
    
    done(test)
});

casper.test.begin('Can flip answer to question', 1, function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    
    questionPage.showBackOfCard()
    answerPage.showFrontOfCard()

    questionPage.checkThatCardFrontIsShown()
    
    done(test)
});