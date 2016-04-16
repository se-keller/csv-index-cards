phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')
phantom.page.injectJs('js/page-objects/MultipleChoicePage.js')
phantom.page.injectJs('js/page-objects/PairsPage.js')

var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()
var multipleChoicePage = new MultipleChoicePage()
var pairsPage = new PairsPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a csv url with image url as first value is loaded WHEN flip mode is shown THEN the question is shown as image', function suite(test) {
    csvLoadPage.startOnFlipModeWithImageUrlCsv()
    
    questionPage.checkThatQuestionIsShwonAsImage()
    
    done(test)
});

casper.test.begin('GIVEN a csv url with image url as first value is loaded WHEN multiple-choice mode is shown THEN the question is shown as image', function suite(test) {
    csvLoadPage.startOnMultipleChoiceModeWithImageUrlCsv()
    
    multipleChoicePage.checkThatQuestionIsShwonAsImage()
    
    done(test)
});

casper.test.begin('GIVEN the csv url with image is loaded WHEN swapped AND multiple-choice mode is shown THEN the answers are shown as image', function suite(test) {
    csvLoadPage.startOnMultipleChoiceModeWithImageUrlCsv()
    
    multipleChoicePage.swapDeck()

    multipleChoicePage.checkThatAnswersAreShwonAsImage()
    
    done(test)
});

casper.test.begin('GIVEN the csv url with image is loaded WHEN in pairs mode THEN the image url is shown as image', function suite(test) {
    csvLoadPage.startOnPairsModeWithImageUrlCsv()

    pairsPage.checkAnyImageShown()
    
    done(test)
});