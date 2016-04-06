phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')
phantom.page.injectJs('js/page-objects/MultipleChoicePage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()
var multipleChoicePage = new MultipleChoicePage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a csv url with image url as values is loaded WHEN flip mode is shown THEN the image is shown', function suite(test) {
    csvLoadPage.startOnFlipModeWithImageUrlCsv()
    
    questionPage.checkThatQuestionIsShwonAsImage()
    
    done(test)
});

casper.test.begin('GIVEN a csv url with image url as values is loaded WHEN multiple-choice mode is shown THEN the image is shown', function suite(test) {
    csvLoadPage.startOnMultipleChoiceModeWithImageUrlCsv()
    
    multipleChoicePage.checkThatQuestionIsShwonAsImage()
    
    done(test)
});