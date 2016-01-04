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

});

  