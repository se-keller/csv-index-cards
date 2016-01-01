function Card (front, back) {
    this.front = front
    this.back = back
    this.getFront = function() {
        return this.front;
    }
    this.getBack = function() {
        return this.back;
    }

    this.swap = function() {
    	var temp = this.front
    	this.front = this.back
    	this.back = temp
    }
}