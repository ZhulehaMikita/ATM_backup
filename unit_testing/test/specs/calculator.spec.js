/* eslint-disable max-len */
const Calculator = require('../../app/calculator.js');
const {expect} = require('chai');

describe(`scenarios for add() method testing`, function() {
  let validator;

  beforeEach(function() {
    validator = new Calculator();
  });

  afterEach(function() {
    validator = null;
  });

  it(`should return value if only one number is specified`, function() {
    expect(validator.add(13)).to.be.equal(13);
  });

  it(`should return sum of 2 numbers`, function() {
    expect(validator.add(34, 150)).to.be.equal(184);
  });

  it(`should return sum of 3 numbers`, function() {
    expect(validator.add(14, 20, -3)).to.be.equal(31);
  });

  it(`should throw error if some value is not a number`, function() {
    expect(() => validator.add(11, 20, 'string')).to.throw('[11,20,string] contains values that are not numbers');
  });

  it(`should throw error if method has no values`, function() {
    expect(() => validator.add()).to.throw('You did not specify values for this method');
  });
});

describe(`scenarios for multiply() method testing`, function() {
  let validator;

  beforeEach(function() {
    validator = new Calculator();
  });

  afterEach(function() {
    validator = null;
  });

  it(`should return value if only one number is specified`, function() {
    expect(validator.add(11)).to.be.equal(11);
  });

  it(`should return product of 2 numbers`, function() {
    expect(validator.multiply(5, 5)).to.be.equal(25);
  });

  it(`should return product of 3 numbers`, function() {
    expect(validator.multiply(3, 4, -1)).to.be.equal(-12);
  });

  it(`should throw error if some value is not a number`, function() {
    expect(() => validator.multiply(1, 0, 'string')).to.throw('[1,0,string] contains values that are not numbers');
  });

  it(`should throw error if method has no values`, function() {
    expect(() => validator.multiply()).to.throw('You did not specify values for this method');
  });
});
