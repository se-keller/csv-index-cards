function MultipleChoice(deck) {
	this.NR_OF_CHOICES = 4
	this.deck = deck

	this.choices = function() {
		var choices = new Deck()
		choices.add(deck.top())

		var shuffeld = deckWithoutTopShuffeld()
		for(var i = 0; i < this.NR_OF_CHOICES-1; i++) {			
			choices.add(shuffeld.top())
			shuffeld.draw()
		}

		choices.shuffel()
		return choices
	}

	var deckWithoutTopShuffeld = function() {
		var clone = deck.clone()
        clone.remove(deck.top())
        clone.shuffel()
        return clone
	}

}