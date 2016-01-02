var Randomizer = function(seed) {
	this.seed = seed
	this.hasSeed = true
	
	if(arguments.length === 0)
		this.hasSeed = false

	this.random = function() {
		if(this.hasSeed) {
			// Algorithm found: http://stackoverflow.com/revisions/19303725/2
    		var x = Math.sin(this.seed++) * 10000;
    		return x - Math.floor(x);
    	}
    	return Math.random()
	}
}