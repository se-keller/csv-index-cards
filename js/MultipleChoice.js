function MultipleChoice(deck) {
	this.NR_OF_CHOICES = 4
	this.deck = deck
	this.shuffler = new ArrayShuffler(Math)

	this.choices = function() {
		var choices = []
		choices.push(deck.top().getBack())

		var shuffeld = deckWithoutTopShuffeld()
		for(var i = 0; i < this.NR_OF_CHOICES-1; i++) {			
			choices.push(shuffeld.top().getBack())
			shuffeld.draw()
		}

		return this.shuffler.shuffel(choices)
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