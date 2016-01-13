function Deck () {
    this.cards = []
    this.currentCard = 0;
    var frontLabel = "Question"
    var backLabel = "Answer"
    var shuffler = new ArrayShuffler(Math)

    this.add = function(card) {
        this.cards.push(card)
    }

    this.top = function() {
        return this.cards[this.currentCard]
    }

    this.draw = function() {
    	if(this.currentCard >= this.cards.length-1) {
        	this.currentCard = 0
        } else {
            this.currentCard++
        }
    }

    this.setHeaders = function(front, back) {
    	frontLabel = front
    	backLabel = back
    }

    this.frontHeader = function() {
    	return frontLabel
    }

    this.backHeader = function() {
    	return backLabel
    }

    this.shuffel = function() {
    	this.cards = shuffler.shuffel(this.cards)
    	this.currentCard = 0
    }

    this.swap = function() {
    	var temp = frontLabel
    	frontLabel = backLabel
    	backLabel = temp
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

    this.remove = function() {
        this.cards.splice(this.currentCard,1)
    }

    this.clone = function() {
        return $.extend(true, {}, this);
    }

    this.includes = function(card) {
        return this.cards.includes(card)
    }
}