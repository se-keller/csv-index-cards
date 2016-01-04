describe("DeckUnmarshaller", function() {
  var unmarshaller
  
  beforeEach(function() {
    unmarshaller = new DeckUnmarshaller()
  });

  it("interprets first and second value of first row as front and back label", function() {
  	var values = [["Question", "Answer"]]
  	var deck = unmarshaller.fromArray(values)
    expect(deck.getFrontLabel()).toEqual("Question")
    expect(deck.getBackLabel()).toEqual("Answer")
  });

	it("interprets first and second value from second row on as card's front and back value", function() {
  		var values = [["Question", "Answer"], ["question", "answer"]]
  		var deck = unmarshaller.fromArray(values)
    	expect(JSON.stringify(deck.getNextCard())).toEqual(JSON.stringify(new Card("question", "answer"))) 
 	});  

  describe("when reading from a readable csv-url", function() { 
    var deck
    beforeEach(function(done) {
        unmarshaller.fromCsvUrl(
        "resources/example.csv", 
        function(data) {
          deck = data
          done()
        }, 
        function() {
          fail("Should not raise an error while converting from csv-url")
          done()
        }
      )
    })

    it("it converts it into a deck", function() {  
      expect(deck.size()).toEqual(19)
    });
  });

  describe("when reading from a unreadable csv-url", function() { 
    var hasError = false
    beforeEach(function(done) {
        unmarshaller.fromCsvUrl(
        "unreadable url", 
        function(data) {
          fail("Should not convert unreadable csv-url")
          done()      
        }, 
        function() {
          hasError = true
          done()
        }
      )
    })
    it("it raises an error", function() {  
      expect(hasError).toEqual(true)
    });
    
  });

});

  