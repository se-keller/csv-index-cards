function Card (front, back) {
    this.front = front
    this.back = back
    this.getFront = function() {
        return this.front;
    }
    this.getBack = function() {
        return this.back;
    }
}