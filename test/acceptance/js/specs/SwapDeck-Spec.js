phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')
phantom.page.injectJs('js/page-objects/MenuPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()
var menuPage = new MenuPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a question is shown WHEN swap deck THEN the answer is shown as question', 1, function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()

    menuPage.swapDeck()
    
    questionPage.checkThatAnswerIsShownAsQuestion()

    done(test)   
});



