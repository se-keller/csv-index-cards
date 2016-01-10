function AnswerPage() {
	 this.showQuestion = function() {
        casper.then(function() {
            casper.click("#button-show-card-front")
        })
    }

    this.checkThatAnswerIsShown = function(){
        casper.then(function() {
            casper.waitUntilVisible('#card-back', function() {
                casper.test.assertVisible('#card-back-value');
            })
        })
    }
}