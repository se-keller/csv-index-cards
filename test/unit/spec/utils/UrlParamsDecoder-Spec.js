describe("UrlParamsDecoder", function() {

  var decoder

  it("can retrieve one param", function() {
    var decoder = new UrlParamsDecoder('any.url?PARAM=VALUE')
    expect(decoder.valueOf('PARAM')).toEqual('VALUE')
  }); 

  it("can retrieve many params", function() {
    var decoder = new UrlParamsDecoder('any.url?PARAM1=VALUE1&PARAM2=VALUE2')
    expect(decoder.valueOf('PARAM2')).toEqual('VALUE2')
  });

  it("can check if no params exist", function() {
    var decoder = new UrlParamsDecoder('no.params')
    expect(decoder.hasParams()).toEqual(false)
  });

  it("can check if params exist", function() {
    var decoder = new UrlParamsDecoder('any.url?param=value')
    expect(decoder.hasParams()).toEqual(true)
  }); 

});