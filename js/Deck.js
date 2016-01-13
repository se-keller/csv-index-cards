function Deck () {
    var cards = []
    var currentCard = 0;
    var frontLabel = "Question"
    var backLabel = "Answer"
    var shuffler = new ArrayShuffler(Math)

    this.add = function(card) {
        cards.push(card)
    }

    this.top = function() {
        return cards[currentCard]
    }

    this.draw = function() {
    	if(currentCard >= cards.length-1) {
        	currentCard = 0
        } else {
            currentCard++
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
    	cards = shuffler.shuffel(cards)
    	currentCard = 0
    }

    this.swap = function() {
    	var temp = frontLabel
    	frontLabel = backLabel
    	backLabel = temp
    	for(var i = 0; i < cards.length; i++) {
    		cards[i].swap()
    	}
    }

    this.size = function() {
    	return cards.length
    }

    this.currentProgress = function() {
    	return currentCard
    }

    this.remove = function() {
        cards.splice(currentCard,1)
    }

    this.clone = function() {
        var theClone = new Deck()
        theClone.setHeaders(frontLabel, backLabel)
        for(var i = 0; i < cards.length; i++) {
            theClone.add(cards[i])
        }
        return theClone;
    }

    this.includes = function(card) {
        return cards.includes(card)
    }
}