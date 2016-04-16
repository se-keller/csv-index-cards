phantom.page.injectJs('js/page-objects/CsvLoadPage.js')
phantom.page.injectJs('js/page-objects/QuestionPage.js')


var csvLoadPage = new CsvLoadPage()
var questionPage = new QuestionPage()

var clearStorage = function() {
    casper.evaluate(function(){
        localStorage.removeItem("csvUrls")
    })
}
var done = function(test) {
    clearStorage()
    casper.run(function() {
        test.done();
    });
}

casper.test.begin('GIVEN a new csv has been used WHEN loading the app again THEN the last csv url can be seen again', function suite(test) {
    clearStorage()
    csvLoadPage.startOnFlipMode()
    questionPage.back()
    
    csvLoadPage.refresh()

    csvLoadPage.checkLocalTestCsvUrlIsChoosableFirst()
    done(test) 
});

casper.test.begin('GIVEN a csv has been used WHEN another csv has been used THEN the first csv url can be choosen again', function suite(test) {
    clearStorage()
    csvLoadPage.startOnFlipModeWithImageUrlCsv()
    questionPage.back()
    
    csvLoadPage.startOnFlipMode()
    questionPage.back()

    csvLoadPage.checkLocalTestCsvUrlIsChoosableFirst()
    done(test) 
});