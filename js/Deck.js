function Deck () {
    this.cards = []
    this.currentCard = 0;
    this.frontLabel = "Question"
    this.backLabel = "Answer"
    this.shuffler = new ArrayShuffler(Math)

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

    this.shuffel = function() {
    	this.cards = this.shuffler.shuffel(this.cards)
    	this.currentCard = 0
    }

    this.swap = function() {
    	var temp = this.frontLabel
    	this.frontLabel = this.backLabel
    	this.backLabel = temp
    	for(var i = 0; i < this.cards.length; i++) {
    		this.cards[i].swap()
    	}
    }

    this.size = function() {
    	return this.cards.length
    }

    this.currentProgress = function() {
    	return this.currentCard
    }
}