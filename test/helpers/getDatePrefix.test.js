const getDatePrefix = require('../../src/helpers/getDatePrefix');

test('empty input should return empty output', () => {
  expect(getDatePrefix('')).toBe('');
});

test('date and time input should return date prefix', () => {
  expect(getDatePrefix('26/01 @ 3:22:06 PM')).toBe('26/01');
});
