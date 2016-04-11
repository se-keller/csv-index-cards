var deck
var csvUrlRepository

<<<<<<< HEAD
$(document).ready(function() {    
    csvUrlRepository = new CsvUrlLocalStorage()
    $("#button-load-csv").click(loadCsv)
    refreshUsedCsvUrls()
=======
$(document).ready(function() {
	csvUrlRepository = new CsvUrlLocalStorage()
	if(!csvUrlRepository.isEmpty())
		$("#input-csv-url").val(csvUrlRepository.getAll()[0])
    $("#button-load-csv").click(loadCsv)
    

>>>>>>> aaf079758714cf5f9099455791cd30136d78f72e
});


function loadCsv() {
    new DeckUnmarshaller().fromCsvUrl($('#input-csv-url').val(), dataReceived, errorLoadingCsv)
}

function dataReceived(data) {
<<<<<<< HEAD
    csvUrlRepository.add($('#input-csv-url').val())
    deck = data
    
    showCurrentFront() 
=======
	csvUrlRepository.add($('#input-csv-url').val())
    deck = data
    showCurrentFront()    
>>>>>>> aaf079758714cf5f9099455791cd30136d78f72e
}

function progressVal() {
    return deck.currentProgress()+1
}

function errorLoadingCsv() {
    $( "#popup-error-loading-csv" ).popup("open")
}

function setCardValue(value, valueSelector, imgSelector) {
    $(valueSelector).removeAttr('style')
    $(imgSelector).removeAttr('style')
    if(isImageFileUrl(value)) {
        $(valueSelector).css("display", "none")
        $(imgSelector).attr("src", value)
    } else {    
        $(imgSelector).css("display", "none")
        $(valueSelector).text(value)
    }
}

function refreshUsedCsvUrls() {
    if(!csvUrlRepository.isEmpty()) {
        var csvUrls = csvUrlRepository.getAll()
        $("#input-csv-url").val(csvUrls[0])
    }
}

function isImageFileUrl(value) {
    return new RegExp('.+(\.png$)|.+(\.gif$)|.+(\.jpg$)|.+(\.jpeg$)|.+(\.bmp$)', 'i').exec(value)
}

