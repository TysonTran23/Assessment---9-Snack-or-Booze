const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("should traverse and return correctly", () => {
    expect(
      unroll([
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
      ])
    ).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
    expect(
      unroll([
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
      ])
    ).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });
});
