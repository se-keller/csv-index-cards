function PairsPage() {
	 this.checkAnyImageShown = function() {
        casper.then(function() {
            casper.waitUntilVisible('#pairs-grid', function() {
                casper.test.assertVisible('.pair-img');
            })
        })
    }
}