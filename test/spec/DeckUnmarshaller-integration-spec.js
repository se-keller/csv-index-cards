describe("DeckUnmarshaller (Integration)", function() {
  var unmarshaller
  
  beforeEach(function() {
    unmarshaller = new DeckUnmarshaller()
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
          fail("Should not raise an error while converting from csv URL")
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
          fail("Should not convert unreadable csv URL")
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