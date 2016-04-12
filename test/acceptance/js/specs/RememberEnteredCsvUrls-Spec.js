phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')


var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

var done = function(test) {
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a new csv has been used WHEN loading the app again THEN the last csv url can be seen again', function suite(test) {
    csvLoadPage.startOnFlipMode()
    questionPage.back()
    
    csvLoadPage.refresh()

    csvLoadPage.checkCsvUrlIsLocalTestCsvUrl()
    done(test) 
});

casper.test.begin('GIVEN a csv has been used WHEN another csv has been used THEN the first csv url can be choosen again', function suite(test) {
    csvLoadPage.startOnFlipMode()
    questionPage.back()
    
    csvLoadPage.startOnFlipModeWithImageUrlCsv()
    questionPage.back()

    csvLoadPage.checkLocalTestCsvUrlIsChoosable()
    done(test) 
});