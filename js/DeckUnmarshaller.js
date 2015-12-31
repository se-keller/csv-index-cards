var DeckUnmarshaller = function() {
	this.fromArray = function(values) {
		var deck = new Deck()
		deck.setLabels(values[0][0], values[0][1])
		for (var i = 1; i < values.length; i++) {
			deck.add(new Card(values[i][0], values[i][1]))
		};


		return deck
	}

	this.fromCsv = function(csv) {
		return this.fromArray(new CsvSplitter().split(csv))
	}
}