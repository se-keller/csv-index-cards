describe("Card", function() {
  
  var card

  beforeEach(function() {
    card = new Card("question", "answer")
  });

  it("can swap front with back", function() {
    card.swap()
    expect(card.getFront()).toEqual("answer")
    expect(card.getBack()).toEqual("question")
  });
})