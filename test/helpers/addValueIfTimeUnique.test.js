const addValueIfTimeUnique = require('../../src/helpers/addValueIfTimeUnique');

test('add new entry into empty array should return array with new entry', () => {
  const array = [];
  const entry = { weight: 4, date: '26/01 @ 1:42:40 PM' };
  const expected = [{ weight: 4, date: '26/01 @ 1:42:40 PM' }];

  expect(addValueIfTimeUnique(entry, array)).toEqual(expected);
});

test('add new entry with non-unique weight value and non-unique date value should return same array', () => {
  const array = [
    { weight: 3, date: '26/01 @ 12:42:40 PM' },
    { weight: 3, date: '26/01 @ 1:42:40 PM' }
  ];
  const entry = { weight: 3, date: '26/01 @ 1:42:40 PM' };
  const expected = array;

  expect(addValueIfTimeUnique(entry, array)).toEqual(expected);
});

test('add new entry with unique weight value and non-unique date value should return new array with updated weight value', () => {
  const array = [
    { weight: 3, date: '26/01 @ 12:42:40 PM' },
    { weight: 3, date: '26/01 @ 1:42:40 PM' }
  ];
  const entry = { weight: 5, date: '26/01 @ 1:42:40 PM' };
  const expected = [
    { weight: 3, date: '26/01 @ 12:42:40 PM' },
    { weight: 5, date: '26/01 @ 1:42:40 PM' }
  ];

  expect(addValueIfTimeUnique(entry, array)).toEqual(expected);
});

test('add new entry with unique weight value and unique date value should return array with new entry', () => {
  const array = [
    { weight: 3, date: '23/01 @ 12:42:40 PM' },
    { weight: 4, date: '24/01 @ 1:42:40 PM' }
  ];
  const entry = { weight: 5, date: '25/01 @ 2:42:40 PM' };
  const expected = [
    { weight: 3, date: '23/01 @ 12:42:40 PM' },
    { weight: 4, date: '24/01 @ 1:42:40 PM' },
    { weight: 5, date: '25/01 @ 2:42:40 PM' }
  ];

  expect(addValueIfTimeUnique(entry, array)).toEqual(expected);
});
