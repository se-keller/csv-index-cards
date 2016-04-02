CSV Idex Cards
==============

[se-keller.github.io/csv-index-cards](http://se-keller.github.io/csv-index-cards)

csv-index-cards is a way to disply online csv-files as index cards.

Running the unit tests
----------------------
[Jasmine](http://jasmine.github.io/) is used as the unit testig framework. To run the unit tests simply open the file [test/unit/SpecRunner.html](http://se-keller.github.io/csv-index-cards/test/unit/SpecRunner.html) in a browser.


Running the acceptance tests
----------------------------
[Casper.js](http://www.casperjs.org) is used as the headless ui testing framework. [Casper.js](http://www.casperjs.org) uses [Phantom.js](http://phantomjs.org/). So to run the tests [Phantom.js](http://phantomjs.org/) and [Casper.js](http://www.casperjs.org) need to be installed nad added to the path variable. You can do it via a package management software of your choice like [homebrew](http://brew.sh) or [npn](https://www.npmjs.com), or do it manually.

E.g. for Mac use:

```
PATH=$PATH:<PATH_TO_CASPERJS>/casperjs/bin:<PATH_TO_PHANTOMJS>/phantomjs
```

To run all acceptance tests use the command:

```
casperjs test js/specs
```
