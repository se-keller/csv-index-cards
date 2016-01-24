phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

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