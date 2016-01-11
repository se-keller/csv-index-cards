function MenuPage() {
	 this.swapDeck = function() {
        casper.then(function() {
            casper.click('#button-menu')
            casper.waitUntilVisible('#menu', function(){
                casper.click("#button-swap-deck")    
            })
            casper.waitWhileVisible('#menu')
        })
    }

    this.shuffelDeck = function() {
        casper.then(function() {
            casper.click('#button-menu')
            casper.waitUntilVisible('#menu', function(){
                casper.click("#button-shuffel-deck")
            })
            casper.waitWhileVisible('#menu')
        })
    }
}