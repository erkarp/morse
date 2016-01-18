describe("Test Morse Toggle", function() {

  var shortStr, basicStr, numberStr, specialStr;

  beforeEach(function() {
    shortStr = 'a bc D.';
    basicStr = "this is a string.";
    numberStr = "249 058 9489";
    specialStr = "Oh sh*t, It's a 3rd str^ng";
  });

/*
  it("encode should return a string of CAPITAL LETTERS", function() {
    expect(encode(shortStr, function(x) {return x.toUpperCase()}, '')).toEqual('A BC D.');
  });
*/

  it("the prototype encode fn should return a string of morse symbols", function() {
    var str = basicStr.encode();
    console.log(str, str.length);
    expect(str.length > 17 && str.length < 61).toBe(true);
  });

  it("the prototype encode fn should return a string of numbers  (times)", function() {
    var str = basicStr.encodeTime();
    console.log(str, str.length);
    expect(str.length > 17 && str.length < 61).toBe(true);
  });


/**** flatten() is depreciated
  it("flatten should return a single, 1D array", function() {

    var twoD = [[1,2,3],[989, 0, 23],['abc', 04, -3]],
        oneD =  [1,2,3,  989, 0, 23,  'abc', 04, -3];

    expect(twoD.flatten()).toEqual(oneD);
  });
*/

});
