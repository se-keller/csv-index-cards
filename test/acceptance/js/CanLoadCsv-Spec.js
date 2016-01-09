//phantom.page.injectJs('page-objects/CsvLoadPage.js');

function CsvLoadPage() {
    var url = "file:///Users/sebastiankeller/devenv/sources/github/csv-index-cards/index.html" //"http://se-keller.github.io/csv-index-cards"
    this.startOnCsvLoadPage = function() {
        casper.echo("Load " + url)
        casper.start(url)
    }

    this.fillCsvUrlWithLocalTestCsvUrl = function() {
        casper.then(function() {
            casper.sendKeys('#input-csv-url', "test/unit/resources/example.csv");
        })
    }

    this.loadCsv = function() {
        casper.then(function() {
            casper.click("#button-load-csv")
            casper.wait(250)
        })
    }

    this.checkThatCardIsShown = function(){
        casper.then(function() {
            casper.waitForSelector('#card-front-label', function() {
                casper.capture("Can load a local CSV file.png")
                casper.test.assertSelectorHasText('#card-front-label', 'Spanish');
            })
        })
    }
}


var csvLoadPage = new CsvLoadPage()

casper.test.begin('Can load a local CSV file', 1, function suite(test) {
    csvLoadPage.startOnCsvLoadPage()
    csvLoadPage.fillCsvUrlWithLocalTestCsvUrl()

    csvLoadPage.loadCsv()
    
    csvLoadPage.checkThatCardIsShown()

    casper.run(function() {
        test.done();
    });
});