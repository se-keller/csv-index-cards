function CsvUrlLocalStorage () {
	this.add = function(csvUrl) {
		var csvUrls = this.getAll()
		for(var i = 0; i < csvUrl.length; i++) {
			if(csvUrls[i]===csvUrl) {
				csvUrls.splice(i,1)
			}
		}
		csvUrls.unshift(csvUrl)
		localStorage.csvUrls = JSON.stringify(csvUrls)
    }

    this.getAll = function() {
    	if(localStorage.csvUrls === undefined) {
			localStorage.csvUrls = JSON.stringify([])
		}
    	return JSON.parse(localStorage.csvUrls)
    }

    this.isEmpty = function() {
    	return this.getAll().length === 0
    }

    this.clear = function() {
    	localStorage.removeItem("csvUrls")
    }
}