/**
 *
 * A simple class containing methods of addition and multiplication
 * @class Calculator
 */
class Calculator {
  /**
     * Creates an instance of Calculator
     * @memberof Calculator
     */
  constructor() {};
  /**
     *
     *
     * @param {Array<Number>} all args should be numbers
     * @return {Number} return the sum of numbers
     * @memberof Calculator
     */
  add(...args) {
    if (args.some((item) => typeof item !== 'number')) {
      throw new Error(`[${args}] contains values that are not numbers`);
    }
    if (args.length === 0) {
      throw new Error(`You did not specify values for this method`);
    }
    return args.reduce((acc, curr) => acc + curr);
  };

  /**
     *
     *
     * @param {Array<Number>} all args should be numbers
     * @return {Number} return the product of numbers
     * @memberof Calculator
     */
  multiply(...args) {
    if (args.some((item) => typeof item !== 'number')) {
      throw new Error(`[${args}] contains values that are not numbers`);
    }
    if (args.length === 0) {
      throw new Error(`You did not specify values for this method`);
    }
    return args.reduce((acc, curr) => acc * curr);
  }
};

module.exports = Calculator;
