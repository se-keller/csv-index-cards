function QuestionPage() {
	this.showAnswer = function() {
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.log(casper.evaluate(function(){
                    return $("#input-csv-url").val()
                }), "error")
                casper.click("#button-show-card-back")
            })
            
        })
    }

    this.checkThatQuestionIsShown = function(){
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.test.assertVisible('#card-front-value')
            })
            
        })
    }

    this.goToNextQuestion = function() {
        casper.waitUntilVisible('#card-front', function() {
            casper.click("#button-next")
        })
    }

    this.checkThatNextQuestionIsShown = function() {
    	casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
            	casper.test.assertSelectorHasText('#card-front-value', 'question2');
            })
            
        })	
    }

    this.checkThatQuestionIsShwonAsImage = function() {
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.test.assertVisible('#card-front-img');
                casper.test.assertNotVisible('#card-front-value');
            })
        })  
    }

    this.goToLastQuestion = function() {
    	this.goToNextQuestion()
    	this.goToNextQuestion()
    	this.goToNextQuestion()
    	this.goToNextQuestion()
    }

    this.checkThatFirstQuestionIsShown = function() {
    	casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
            	casper.test.assertSelectorHasText('#card-front-value', 'question1');
                casper.test.assertSelectorHasText('#card-front-label', 'Questions');
            })
            
        })	
    }

    this.checkThatAnswerIsShownAsQuestion = function() {
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.test.assertSelectorHasText('#card-front-value', 'answer1');
                casper.test.assertSelectorHasText('#card-front-label', 'Answers');
            })
            
        })  
    }

    this.checkThatProgressIsResetted = function() {
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                var val = casper.evaluate(function(){
                    return $('#slider-progress').val()
                })
                casper.test.assertEqual(val, "1");
            })
            
        })   
    }

    this.swapDeck = function() {
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.click('#button-menu-flip')
                casper.waitUntilVisible('#menu-flip', function(){
                    casper.click("#button-swap-deck")    
                })
                casper.waitWhileVisible('#menu-flip')
            })
        })
    }

    this.shuffelDeck = function() {
        casper.then(function() {
            casper.waitUntilVisible('#card-front', function() {
                casper.click('#button-menu-flip')
                casper.waitUntilVisible('#menu-flip', function(){
                    casper.click("#button-shuffel-deck")
                })
                casper.waitWhileVisible('#menu-flip')
            })
        })
    }
}