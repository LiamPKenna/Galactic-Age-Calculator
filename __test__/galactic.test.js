import { Galactic } from './../src/js/galactic.js';

describe('Galactic', () => {

  let galactic;

  beforeEach(() => {
    galactic = new Galactic();
  });

  // Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
  test('should construct an object with the multiplier for Mercury', () => {
    expect(galactic.modMercury).toEqual(.24);
  });

  // Returns their age in Venus years. (A Venus year is .62 Earth years.)
  test('should construct an object with the multiplier for Venus', () => {
    expect(galactic.modVenus).toEqual(.62);
  });

  // Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
  test('should construct an object with the multiplier for Mars', () => {
    expect(galactic.modMars).toEqual(1.88);
  });

  // Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)

});
