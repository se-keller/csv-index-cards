function QuestionPage() {
	this.showAnswer = function() {
        casper.then(function() {
            casper.click("#button-show-card-back")
        })
    }

    this.checkThatQuestionIsShown = function(){
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.test.assertVisible('#card-front-value')
            })
            
        })
    }
}