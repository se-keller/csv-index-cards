function CsvLoadPage() {
    var url = "file:///Users/sebastiankeller/devenv/sources/github/csv-index-cards/index.html" //"http://se-keller.github.io/csv-index-cards"
    this.startOnCsvLoadPage() = function() {
        casper.echo("Load " + url)
        casper.start(url);
    }

    this.fillCsvUrlWithLocalTestCsvUrl() = function() {
        casper.sendKeys('#input-csv-url', "test/unit/resources/example.csv");
    }

    this.loadCsv() = function() {
        this.click("#button-load-csv")
        this.wait(250)
    }

    this.checkThatCardIsShown() {
        casper.waitForSelector('#card-front-label', function() {
            casper.capture("Can load a local CSV file.png")
            test.assertSelectorHasText('#card-front-label', 'Spanish');
        })
    }
}
