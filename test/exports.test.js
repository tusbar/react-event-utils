import utils from '../lib';

test('export 3 functions', () => {
  expect(Object.keys(utils)).toEqual([
    'persist',
    'preventDefault',
    'stopPropagation'
  ]);
});
