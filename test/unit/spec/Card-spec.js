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

  it("can check if two cards are equal", function() {
    expect(card.equalTo(new Card("question", "answer"))).toEqual(true)
    expect(card.equalTo(new Card("otherQuestion", "otherAnswer"))).toEqual(false)
  });


})