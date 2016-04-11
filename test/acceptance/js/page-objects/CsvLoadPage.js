function CsvLoadPage() {
    var url = "file:///Users/sebastiankeller/devenv/sources/github/csv-index-cards/index.html" 
    
    this.startOnFlipMode = function() {
        this.startOnCsvLoadPage()
        this.fillCsvUrlWithLocalTestCsvUrl()
        this.loadCsv()
    }

    this.startOnFlipModeWithImageUrlCsv = function() {
        this.startOnCsvLoadPage()
        this.fillCsvUrlWithLocalTestWithImageUrlsCsvUrl()
        this.loadCsv()
    }

    this.startOnMultipleChoiceModeWithImageUrlCsv = function() {
        this.startOnFlipModeWithImageUrlCsv()
        this.switchFromFlipToMultipleChoice()
    }

    this.startOnCsvLoadPage = function() {
        casper.start(url)
    }

    this.startOnMultipleChoiceMode = function() {
        this.startOnFlipMode()
        this.switchFromFlipToMultipleChoice()
    }

    this.fillCsvUrlWithLocalTestCsvUrl = function() {
        casper.then(function() {
            casper.waitUntilVisible('#input-csv-url', function() {
                casper.sendKeys('#input-csv-url', "test/acceptance/resources/test.csv", { reset: true});
            })
        })
    }

    this.fillCsvUrlWithLocalTestWithImageUrlsCsvUrl = function() {
        casper.then(function() {
            casper.waitUntilVisible('#input-csv-url', function() {
                casper.sendKeys('#input-csv-url', "test/acceptance/resources/test-withImageUrls.csv", { reset: true});
            })
        })   
    }

    this.loadCsv = function() {
        casper.then(function() {
            casper.waitUntilVisible('#input-csv-url', function() {
                casper.click("#button-load-csv")    
            })
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
            casper.waitUntilVisible('#input-csv-url', function() {
                casper.sendKeys('#input-csv-url', "Unloadable URL");
            })                
        })
    }
    
    this.switchFromFlipToMultipleChoice = function() {
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.click('#button-menu-flip')
                casper.waitUntilVisible('#menu-flip', function(){
                    casper.click("#button-show-multiple-choice-from-flip")    
                })
                casper.waitWhileVisible('#menu-flip')
            })
        })
    }
   

    
}
