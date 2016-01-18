phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/MultipleChoicePage.js')

var csvLoadPage = new CsvLoadPage()
var multipleChoicePage = new MultipleChoicePage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a csv is loaded WHEN multiple choice mode is visible THEN first answer is shown', function suite(test) {
    csvLoadPage.startOnMultipleChoiceMode()
    
    multipleChoicePage.checkThatFirstQuestionIsShown()
    
    done(test)
});

casper.test.begin('GIVEN question is shown WHEN selecting the right answer THEN the next question is shown', function suite(test) {
    csvLoadPage.startOnMultipleChoiceMode()
    
    multipleChoicePage.selectAnswers()

    multipleChoicePage.checkThatFirstQuestionIsNotShown()
    
    done(test)
});