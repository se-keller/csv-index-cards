describe("DeckUnmarshaller (Integration)", function() {
  var unmarshaller
  
  beforeEach(function() {
    unmarshaller = new DeckUnmarshaller()
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