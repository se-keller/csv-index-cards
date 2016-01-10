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

    this.goToNextQuestion = function() {
    	casper.then(function() {
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
            })
            
        })	
    }
}