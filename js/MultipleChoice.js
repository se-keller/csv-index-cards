function MultipleChoice(cardDeck) {
	var NR_OF_CHOICES = 4
	var deck = cardDeck
	var shuffler = new ArrayShuffler(Math)

	this.choices = function() {
		var choices = []
		choices.push(deck.top().getBack())

		var shuffeld = deckWithoutTopShuffeld()
		for(var i = 0; i < NR_OF_CHOICES-1; i++) {			
			choices.push(shuffeld.top().getBack())
			shuffeld.draw()
		}

		return shuffler.shuffel(choices)
	}

	this.checkSameAnswer = function(answer) {
		return deck.top().getBack() === answer
	}

	var deckWithoutTopShuffeld = function() {
		var clone = deck.clone()
        clone.remove(deck.top())
        clone.shuffel()
        return clone
	}

}