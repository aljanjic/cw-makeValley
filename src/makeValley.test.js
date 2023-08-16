const makeValley = require('./makeValley');

describe('makeValley', () => {
  it('[17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1], should return [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]', () => {
    expect(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])).toStrictEqual([17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
  });

  it('[20, 7, 6, 2], should return [20, 6, 2, 7]', () => {
    expect(makeValley([20, 7, 6, 2])).toStrictEqual([20, 6, 2, 7]);
  });
});
