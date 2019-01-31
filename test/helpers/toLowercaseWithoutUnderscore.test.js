const toLowercaseWithoutUnderscore = require('../../src/helpers/toLowercaseWithoutUnderscore');

test('empty input should return empty output', () => {
  expect(toLowercaseWithoutUnderscore('')).toBe('');
});

test('capitalised input with underscore should return lowercase without underscore', () => {
  expect(toLowercaseWithoutUnderscore('BAR_CURL')).toBe('bar curl');
});
