function Deck () {
    this.cards = []
    this.currentCard = 0;
    this.frontLabel = "Question"
    this.backLabel = "Answer"

    this.add = function(card) {
        this.cards.push(card)
    }

    this.getNextCard = function() {
    	if(this.currentCard > this.cards.length-1)
        	this.currentCard = 0
        return this.cards[this.currentCard++]
    }

    this.setLabels = function(front, back) {
    	this.frontLabel = front
    	this.backLabel = back
    }

    this.getFrontLabel = function() {
    	return this.frontLabel
    }

    this.getBackLabel = function() {
    	return this.backLabel
    }
}