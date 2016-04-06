var DeckUnmarshaller = function() {
	this.fromArray = function(values) {
		var deck = new Deck()
		deck.setHeaders(values[0][0], values[0][1])
		for (var i = 1; i < values.length; i++) {
			deck.add(new Card(values[i][0], values[i][1]))
		};
		return deck
	}

	this.fromCsv = function(csv) {
		return this.fromArray(new CsvSplitter().split(csv))
	}

	this.fromCsvUrl = function(url, successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            url: url,
            dataType: "text",
            success: function(data) {
                successCallback(new DeckUnmarshaller().fromCsv(data))
            },
            error: errorCallback
        })   
}
}