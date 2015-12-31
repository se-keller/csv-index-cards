var CsvSplitter = function() {
    this.split = function(csv) {
        var textLines = csv.trim().split(/\r\n|\n/)
        var values = []

        for (var i=0; i<textLines.length; i++) {
            values.push(textLines[i].split(','))
        }

        return values
    }
}