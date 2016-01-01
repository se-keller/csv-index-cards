describe("CsvSplitter", function() {

  var splitter

  beforeEach(function() {
    splitter = new CsvSplitter()    
  });

  it("splits one value", function() {
    expect(splitter.split("value")).toEqual([["value"]]);
  });

  it("splits a comma seperated line", function() {
    expect(splitter.split("value1,value2")).toEqual([["value1","value2"]]);
  });

  it("splits comma seperated lines", function() {
    expect(splitter.split("value1,value2\nvalue3,value4")).toEqual([["value1","value2"],["value3","value4"]]);
  });


  it("ignores whitespaces on start and end", function() {
    expect(splitter.split(" \n value1,value2 \n ")).toEqual([["value1","value2"]]);
  });

});