function MenuPage() {
	 this.swapDeck = function() {
        casper.then(function() {
            casper.click("#button-swap-deck")
        })
    }

    this.shuffelDeck = function() {
        casper.then(function() {
            casper.click("#button-shuffel-deck")
        })
    }
}