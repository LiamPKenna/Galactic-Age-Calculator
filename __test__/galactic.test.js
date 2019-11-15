import { Galactic } from './../src/js/galactic.js';

describe('Galactic', () => {

  let galactic;

  beforeEach(() => {
    galactic = new Galactic();
  });

  test('should construct an object with the multiplier for Mercury', () => {
    expect(galactic.modMercury).toEqual(.24);
  });

});
