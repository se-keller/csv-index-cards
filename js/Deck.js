function Deck () {
    this.cards = []
    this.currentCard = 0;
    this.frontLabel = "Question"
    this.backLabel = "Answer"
    this.shuffler = new ArrayShuffler(Math)

    var fromArray = function(arr) {
        var deck = new Deck()
        for(var i = 0; i < arr.length; i++) {
            deck.add(arr[i])
        }
        return deck
    }

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

    this.shuffeldRest = function() {
        var cardsCopy = this.cards.slice()
        cardsCopy.splice(this.currentCard,1)
        cardsCopy = this.shuffler.shuffel(cardsCopy)
        return fromArray(cardsCopy)
    }

    this.includes = function(card) {
        return this.cards.includes(card)
    }
}