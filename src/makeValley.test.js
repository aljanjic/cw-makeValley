const makeValley = require('./makeValley');

describe('makeValley', () => {
  it('[17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1], should return [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]', () => {
    expect(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1])).toStrictEqual([17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
  });

  it.only('[20, 7, 6, 2], should return [20, 6, 2, 7]', () => {
    expect(makeValley([20, 7, 6, 2])).toStrictEqual([20, 6, 2, 7]);
  });

  it('[14, 10, 8], should return [14, 8, 10]', () => {
    expect(makeValley([14, 10, 8])).toStrictEqual([14, 8, 10]);
  });

  it('[20, 20, 16, 14, 12, 12, 11, 10, 3, 2], should return [20, 16, 12, 11, 3, 2, 10, 12, 14, 20]', () => {
    expect(makeValley([20, 20, 16, 14, 12, 12, 11, 10, 3, 2])).toStrictEqual([20, 16, 12, 11, 3, 2, 10, 12, 14, 20]);
  });

});
