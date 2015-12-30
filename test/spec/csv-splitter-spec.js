describe("csv-splitter", function() {

  it("splits one value", function() {
    expect(splitCsv("value")).toEqual([["value"]]);
  });

  it("splits a comma seperated line", function() {
    expect(splitCsv("value1,value2")).toEqual([["value1","value2"]]);
  });

  it("splits comma seperated lines", function() {
    expect(splitCsv("value1,value2\nvalue3,value4")).toEqual([["value1","value2"],["value3","value4"]]);
  });


  it("ignores whitespaces on start and end", function() {
    expect(splitCsv(" \n value1,value2 \n ")).toEqual([["value1","value2"]]);
  });

});