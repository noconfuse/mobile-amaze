"use strict";
const expect = require("chai").expect;
const add = require("../dist/index").add;

describe("ts-hi function test", () => {
  it("should return 2", () => {
    const result = add(1, 1);
    expect(result).to.equal(2);
  });
  it("should return 3.5", () => {
    const result = add(1, 2.5);
    expect(result).to.equal(3.5);
  });
});
