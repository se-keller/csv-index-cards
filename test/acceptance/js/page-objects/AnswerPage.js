function AnswerPage() {
	 this.showQuestion = function() {
        casper.then(function() {
            casper.click("#button-show-card-front")
        })
    }

    this.checkThatFirstAnswerIsShown = function(){
        casper.then(function() {
            casper.waitUntilVisible('#card-back', function() {
                casper.test.assertSelectorHasText('#card-back-value', 'answer1');
                casper.test.assertSelectorHasText('#card-back-label', 'Answers');
            })
        })
    }
}