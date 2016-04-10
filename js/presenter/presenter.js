var deck
var csvUrlRepository

$(document).ready(function() {    
	csvUrlRepository = new CsvUrlLocalStorage()
	refreshUsedCsvUrls()
    $("#button-load-csv").click(function(){loadCsv($('#input-csv-url').val())})
    

});


function loadCsv(csvUrl) {
    new DeckUnmarshaller().fromCsvUrl(csvUrl, dataReceived, errorLoadingCsv)
}

function dataReceived(data) {
	csvUrlRepository.add($('#input-csv-url').val())
    refreshUsedCsvUrls()
    deck = data
    showCurrentFront()    
}

function progressVal() {
    return deck.currentProgress()+1
}

function errorLoadingCsv() {
    $( "#popup-error-loading-csv" ).popup("open")
}

function refreshUsedCsvUrls() {
    if(!csvUrlRepository.isEmpty()) {
        var csvUrls = csvUrlRepository.getAll()
        $("#input-csv-url").val(csvUrls[0])
        $("#csv-urls").empty()
        for(var i=1; i<csvUrls.length; i++) {
            $("#csv-urls").append('<li><a id="csv-url-'+ i + '" style="white-space: normal !important; word-wrap:break-word; overflow-wrap: break-word;" data-transition="slide" href="#card-front" type="button" data-role="button">' + csvUrls[i] +'</a></li>')
            $('#csv-url-'+i).click(function(){
                $('#input-csv-url').val($(this).text())
                loadCsv($(this).text())
            })
        }
        $("#csv-urls").listview('refresh')
    }
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

function isImageFileUrl(value) {
    return new RegExp('.+(\.png$)|.+(\.gif$)|.+(\.jpg$)|.+(\.jpeg$)|.+(\.bmp$)', 'i').exec(value)
}

