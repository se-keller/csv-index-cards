var ArrayShuffler = function(randomizer) {
	this.randomizer = randomizer
	this.shuffel = function(arr) {
		for(var j, x, i = arr.length; i; j = parseInt(randomizer.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    	return arr;
	}
}