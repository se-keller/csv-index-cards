var g_values = []
var row = 1;
var flipped = false;

$(document).ready(function() {
    disableFlipAndNext()
    $("#button-load-csv").click(function() {
        $.ajax({
            type: "GET",
            url: $('#input-csv-url').val(),
            dataType: "text",
            success: function(data) {dataReceived(data)},
            error: loadCsvFailed()
        }) 
    })
    $("#button-flip").click(function() {flip()})
    $("#button-next").click(function() {next()})
});

function flip() {
    if(flipped) {
        showCurrentFront()
    } else {
        showCurrentBack()
    }
    flipped = !flipped;

}

function next() {
    if(row < g_values.length)
        row++;
    else
        row = 1
    showCurrentFront()
}

function dataReceived(csv) {
    disableFlipAndNext()
    g_values = splitCsv(csv)
    row = 1
    showCurrentFront()
    enableFlipAndNext()
}

function showCurrentFront() {
    $("#p-csv-values").text(g_values[row][0])
}

function showCurrentBack() {
    $("#p-csv-values").text(g_values[row][1])
}

function loadCsvFailed() {
    $("#p-csv-values").text("Could not load")
    disableFlipAndNext();
}

function disableFlipAndNext() {
    $("#button-next").prop('disabled', true)
    $("#button-flip").prop('disabled', true)
}
function enableFlipAndNext() {
    $("#button-next").prop('disabled', false)
    $("#button-flip").prop('disabled', false)
}