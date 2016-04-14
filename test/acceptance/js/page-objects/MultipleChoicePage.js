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

    this.checkThatQuestionIsShwonAsImage = function() {
        casper.then(function() {
            casper.waitUntilVisible('#multiple-choice', function() {
                casper.test.assertVisible('#choice-question-img');
                casper.test.assertNotVisible('#choice-question');
            })
            
        }) 
    }

    this.checkThatAnswersAreShwonAsImage = function() {
        casper.then(function() {
            casper.waitUntilVisible('#multiple-choice', function() {
                casper.test.assertVisible('#button-answer1-img');
                casper.test.assertVisible('#button-answer2-img');
                casper.test.assertVisible('#button-answer3-img');
                casper.test.assertVisible('#button-answer4-img');
            })
            
        }) 
    }

    this.swapDeck = function() {
        casper.then(function() {
            casper.waitUntilVisible('#multiple-choice', function() {
                casper.click('#button-menu-multiplechoice')
                casper.waitUntilVisible('#menu-multiplechoice', function(){
                    casper.click("#button-swap-deck-multiple-choice")    
                })
                casper.waitWhileVisible('#menu-multiplechoice')
            })
        })
    }

}