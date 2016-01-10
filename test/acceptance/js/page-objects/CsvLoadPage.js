function CsvLoadPage() {
    var url = "file:///Users/sebastiankeller/devenv/sources/github/csv-index-cards/index.html" //"http://se-keller.github.io/csv-index-cards"
    
    this.startWithLoadedTestCsv = function() {
        this.startOnCsvLoadPage()
        this.fillCsvUrlWithLocalTestCsvUrl()
        this.loadCsv()
    }

    this.startOnCsvLoadPage = function() {
        casper.echo("Trying to load from url:" + url)
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
        })
    }

    this.checkThatErrorIsShown = function() {
        casper.then(function(){
            casper.waitUntilVisible("#popup-error-loading-csv", function() {
                casper.test.assertVisible('#popup-error-loading-csv p');
            })
        })
    }

    this.fillCsvUrlWithUnloadableCsvUrl = function() {
        casper.then(function() {
            casper.sendKeys('#input-csv-url', "Unloadable URL");
        })
    }
    

   

    
}
