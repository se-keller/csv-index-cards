var ArrayShuffler = function(randomizer) {
	this.randomizer = randomizer
	// Algorithm found: http://stackoverflow.com/revisions/6274381/8
	this.shuffel = function(arr) {
		for(var j, x, i = arr.length; i; j = parseInt(randomizer.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    	return arr;
	}
}

// var copy = arr.slice()
// var i = arr.indexOf(item)
// if(i != -1)
//   array.splice(i,1);