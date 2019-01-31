const generateCoordinates = require('../../src/helpers/generateCoordinates');

test('empty progress array should return empty transformed array', () => {
  expect(generateCoordinates([], [])).toEqual([]);
});

test('progress array with one element should return new array with one element transformed into x and y coordinates', () => {
  const progress = [{ weight: 4, date: '26/01 @ 1:42:40 PM' }];
  const expected = [{ x: '26/01 @ 1:42:40 PM', y: 4 }];

  expect(generateCoordinates(progress, [])).toEqual(expected);
});

test('progress array with two elements should return new array with two elements transformed into x and y coordinates', () => {
  const progress = [
    { weight: 3, date: '24/01 @ 12:42:40 PM' },
    { weight: 4, date: '25/01 @ 1:42:40 PM' }
  ];
  const expected = [
    { x: '24/01 @ 12:42:40 PM', y: 3 },
    { x: '25/01 @ 1:42:40 PM', y: 4 }
  ];

  expect(generateCoordinates(progress, [])).toEqual(expected);
});

test('progress array with one element and existing transformed array with one element should return new array with two elements transformed into x and y coordinates', () => {
  const progress = [{ weight: 10, date: '21/01 @ 12:42:40 PM' }];
  const transformed = [{ x: '20/01 @ 12:42:40 PM', y: 3 }];
  const expected = [
    { x: '20/01 @ 12:42:40 PM', y: 3 },
    { x: '21/01 @ 12:42:40 PM', y: 10 }
  ];

  expect(generateCoordinates(progress, transformed)).toEqual(expected);
});
