var deck
var csvUrlRepository


$(document).ready(function() {    
	csvUrlRepository = new CsvUrlLocalStorage()
	refreshUsedCsvUrls()
    wireInputEnterWithButtonClick('#input-csv-url', '#button-load-csv')
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
       // $("#input-csv-url").val(csvUrls[0])
        $("#csv-urls").empty()
        $("#csv-urls").append('<li data-role="list-divider">Last used</li>')
        for(var i=0; i<csvUrls.length; i++) {

            $("#csv-urls").append('<li><a id="csv-url-'+ (i+1) + '" style="direction:rtl;overflow:auto;" class="ui-btn ui-shadow ui-corner-all" data-transition="slide" href="#card-front" type="button">' + csvUrls[i] +'</a></li>')
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

function wireInputEnterWithButtonClick(inputSelector, buttonSelector) {
    $(inputSelector).keypress(function (e) {     
        if (e.which == '13') {
            $(buttonSelector).click()
        }
    });
}

function isImageFileUrl(value) {
    return new RegExp('.+(\.png$)|.+(\.gif$)|.+(\.jpg$)|.+(\.jpeg$)|.+(\.bmp$)', 'i').exec(value)
}

