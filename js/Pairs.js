function Pairs(cardDeck) {
	var NR_OF_PAIRS = 5
	var shuffler = new ArrayShuffler(Math)

	this.choices = function() {
		var choices = []

		var shuffeld = shuffeldDeckClone()
		
		for(var i = 0; i < NR_OF_PAIRS; i++) {			
			choices.push(shuffeld.top().getFront())
			choices.push(shuffeld.top().getBack())
			shuffeld.draw()
		}
		
		return shuffler.shuffel(choices)
	}

	this.checkPair = function(value1, value2) {
		return cardDeck.includes(new Card(value1, value2)) || cardDeck.includes(new Card(value2, value1))
	}

	var shuffeldDeckClone = function() {
		var clone = cardDeck.clone()
        clone.shuffel()
        return clone
	}

}