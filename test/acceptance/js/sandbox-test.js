var url = "file:///Users/sebastiankeller/devenv/sources/github/csv-index-cards/index.html" //"http://se-keller.github.io/csv-index-cards"
/*
// casperjs
var casper = require('casper').create();

casper.start(url, function() {
    this.sendKeys('#input-csv-url', "test/unit/resources/example.csv");
});

casper.then(function() {
	this.click("#button-load-csv")
})

casper.then(function(){
	this.waitForSelector('#card-front-label', function() {
		var frontLabel = this.evaluate(function(){
			return $('#card-front-label').text()	
		})
		this.echo(frontLabel)
	})
})

casper.run();
*/

// casperjs test
casper.test.begin('Can load a local CSV file', 1, function suite(test) {
    casper.start(url, function() {
        casper.sendKeys('#input-csv-url', "test/unit/resources/example.csv");
    });

    casper.then(function() {
		this.click("#button-load-csv")
		this.wait(250)
    })

    casper.then(function(){
    	casper.waitForSelector('#card-front-label', function() {
    		casper.capture("Can load a local CSV file.png")
    		test.assertSelectorHasText('#card-front-label', 'Spanish');
    	})
    })

    casper.run(function() {
        test.done();
    });
});

casper.test.begin('Alerts the user if csv is not loadable', 1, function suite(test) {
    casper.start(url, function() {
        casper.sendKeys('#input-csv-url', "Url unknown");
    });

    casper.then(function() {
		this.click("#button-load-csv")
		this.wait(250)
    })

    casper.then(function(){
    	casper.waitForSelector('#popup-error-loading-csv', function() {
    		casper.capture("Alerts the user if csv is not loadable.png")
    		test.assertVisible('#popup-error-loading-csv');
    	})
    })

    casper.run(function() {
        test.done();
    });
});
