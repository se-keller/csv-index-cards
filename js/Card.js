function Card (front, back) {
    var front = front
    var back = back
    this.getFront = function() {
        return front;
    }
    this.getBack = function() {
        return back;
    }

    this.swap = function() {
    	var temp = front
    	front = back
    	back = temp
    }

    this.equalTo = function(card) {
        return front === card.getFront() && back === card.getBack()
    }
}