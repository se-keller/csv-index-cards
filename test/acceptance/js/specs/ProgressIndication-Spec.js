phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()


var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a question is shown in flip mode WHEN next question THEN the progress indication is increased', function suite(test) {
    csvLoadPage.startOnFlipMode()
    
    questionPage.goToNextQuestion()
    
    questionPage.checkThatProgressIndicationIsIncreased()
    
    done(test)
});