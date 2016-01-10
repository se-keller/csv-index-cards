function AnswerPage() {
	 this.showFrontOfCard = function() {
        casper.then(function() {
            casper.click("#button-show-card-front")
        })
    }

    this.checkThatCardBackIsShown = function(){
        casper.then(function() {
            casper.waitUntilVisible('#card-back', function() {
                casper.test.assertVisible('#card-back-value');
            })
        })
    }
}