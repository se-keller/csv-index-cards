function CsvLoadPage() {
    var url = "file:///Users/sebastiankeller/devenv/sources/github/csv-index-cards/index.html" 
    //var url = "http://se-keller.github.io/csv-index-cards/index.html"
    
    this.startOnFlipMode = function() {
        this.startOnCsvLoadPage()
        this.fillCsvUrlWithLocalTestCsvUrl()
        this.loadCsv()
    }

    this.startOnCsvLoadPage = function() {
        casper.start(url)
    }

    this.startOnMultipleChoiceMode = function() {
        this.startOnFlipMode()
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.click('#button-menu-flip')
                casper.waitUntilVisible('#menu-flip', function(){
                    casper.click("#button-show-multiple-choice")    
                })
                casper.waitWhileVisible('#menu-flip')
            })
        })
    }

    this.fillCsvUrlWithLocalTestCsvUrl = function() {
        casper.then(function() {
            casper.sendKeys('#input-csv-url', "test/acceptance/resources/test.csv");
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
