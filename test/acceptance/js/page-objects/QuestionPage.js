function QuestionPage() {
	this.showBackOfCard = function() {
        casper.then(function() {
            casper.click("#button-show-card-back")
        })
    }

    this.checkThatCardFrontIsShown = function(){
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.test.assertVisible('#card-front-value')
            })
            
        })
    }
}