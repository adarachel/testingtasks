const stringLength = require('./stringLength');

describe('stringLength', () => {
  test('returns the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('throws an error if the string is less than 1 character long', () => {
    expect(() => stringLength('')).toThrow('String length must be between 1 and 10 characters.');
  });

  test('throws an error if the string is longer than 10 characters', () => {
    expect(() => stringLength('this is too long')).toThrow('String length must be between 1 and 10 characters.');
  });
});
