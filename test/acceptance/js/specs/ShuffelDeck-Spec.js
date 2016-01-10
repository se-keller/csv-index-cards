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

casper.test.begin('GIVEN the next question is shown WHEN shuffel deck THEN the progress is resetted', 1, function suite(test) {
    csvLoadPage.startWithLoadedTestCsv()
    questionPage.goToNextQuestion()
    
    menuPage.shuffelDeck()
    
    questionPage.checkThatProgressIsResetted()

    done(test)   
});



