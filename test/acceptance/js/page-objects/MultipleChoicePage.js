function MultipleChoicePage() {
	this.checkThatFirstQuestionIsShown = function() {
    	casper.then(function() {
            casper.waitUntilVisible('#multiple-choice', function() {
            	casper.test.assertSelectorHasText('#choice-question', 'question1');
                casper.test.assertSelectorHasText('#choice-label', 'Questions');
            })
        })	
    }

    this.selectAnswers = function() {
    	casper.then(function() {
            casper.waitUntilVisible('#multiple-choice', function() {
            	casper.click("#button-answer1")
            	casper.click("#button-answer2")
            	casper.click("#button-answer3")
            	casper.click("#button-answer4")
            })
        })	
    }

    this.checkThatFirstQuestionIsNotShown = function() {
    	casper.then(function() {
            casper.waitUntilVisible('#multiple-choice', function() {
            	casper.waitForSelectorTextChange('#choice-question', function(){
            		casper.test.assertSelectorDoesntHaveText('#choice-question', 'question1');	
            	})
            })
        })	
    }
}