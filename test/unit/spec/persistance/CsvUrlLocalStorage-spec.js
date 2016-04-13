describe("CsvUrlLocalStorage", function() {
  
  var repository

  beforeEach(function() {
    repository = new CsvUrlLocalStorage()
  });

  afterEach(function() {
    repository.clear()
  });

  it("is initially empty", function() {
    expect(repository.isEmpty()).toEqual(true)
  });

  it("is cleared it is empty", function() {
    repository.clear()
    expect(repository.getAll()).toEqual([])
  });

  it("url is added it is retrievable", function() {
    repository.add("url")
    expect(repository.getAll()).toEqual(["url"])
  }); 

  it("doubles are not added", function() {
    repository.add("url")
    repository.add("url")
    expect(repository.getAll()).toEqual(["url"])
  });

  it("last added is first item", function() {
    repository.add("url-first")
    repository.add("url-last")
    expect(repository.getAll()).toEqual(["url-last", "url-first"])
  });

  it("last added is first item even if it already existed", function() {
    repository.add("url-already-existed")
    repository.add("url-other")
    repository.add("url-already-existed")
    expect(repository.getAll()).toEqual(["url-already-existed", "url-other"])
  });

})