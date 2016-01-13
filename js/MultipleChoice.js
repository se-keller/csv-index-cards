function MultipleChoice(cardDeck) {
	var NR_OF_CHOICES = 4
	var shuffler = new ArrayShuffler(Math)

	this.choices = function() {
		var choices = []
		choices.push(cardDeck.top().getBack())

		var shuffeld = deckWithoutTopShuffeld()
		
		for(var i = 0; i < NR_OF_CHOICES-1; i++) {			
			choices.push(shuffeld.top().getBack())
			shuffeld.draw()
		}
		
		return shuffler.shuffel(choices)
	}

	this.checkSameAnswer = function(answer) {
		return cardDeck.top().getBack() === answer
	}

	var deckWithoutTopShuffeld = function() {
		var clone = cardDeck.clone()
        clone.remove(cardDeck.top())
        clone.shuffel()
        return clone
	}

}