var Randomizer = function(seed) {
	var hasSeed = true
	
	if(arguments.length === 0)
		hasSeed = false

	this.random = function() {
		if(hasSeed) {
			// Algorithm found: http://stackoverflow.com/revisions/19303725/2
    		var x = Math.sin(seed++) * 10000;
    		return x - Math.floor(x);
    	}
    	return Math.random()
	}
}