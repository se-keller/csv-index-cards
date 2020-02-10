var deck
var csvUrlRepository
var urlParamsDecoder


$(document).ready(function() {    
	csvUrlRepository = new CsvUrlLocalStorage()
    urlParamsDecoder = new UrlParamsDecoder(window.location.href)
	refreshUsedCsvUrls()
    wireInputEnterWithButtonClick('#input-csv-url', '#button-load-csv')
    $("#button-load-csv").click(function(){loadCsv($('#input-csv-url').val())})
    if(urlParamsDecoder.hasParams()) {
        var url = urlParamsDecoder.valueOf("csv")
        $('#input-csv-url').val(url)
        loadCsv(url)
    }
});


function loadCsv(csvUrl) {
    if(csvUrl.endsWith("?alt=json"))
        new DeckUnmarshaller().fromGoogleSheet(csvUrl,dataReceived, errorLoadingCsv)
    else
        new DeckUnmarshaller().fromCsvUrl(csvUrl, dataReceived, errorLoadingCsv)
}

function dataReceived(data) {
    console.log(data.top)
	csvUrlRepository.add($('#input-csv-url').val())
    refreshUsedCsvUrls()
    deck = data
    $.mobile.changePage( "#card-front", { transition: "slide", changeHash: true });
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
        $("#csv-urls").empty()
        $("#csv-urls").append('<li data-role="list-divider">Last used</li>')
        for(var i=0; i<csvUrls.length; i++) {

            $("#csv-urls").append('<li><a id="csv-url-'+ (i+1) + '" style="direction:rtl;overflow:auto;" class="ui-btn ui-shadow ui-corner-all" data-transition="slide" href="#card-front" type="button">' + csvUrls[i] +'</a></li>')
            $('#csv-url-'+(i+1)).click(function(){
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

