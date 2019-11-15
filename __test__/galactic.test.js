import { Galactic } from './../src/js/galactic.js';

describe('Galactic', () => {

  let galactic;

  beforeEach(() => {
    galactic = new Galactic();
  });

  test('should construct an object with the multiplier for Mercury', () => {
    expect(galactic.modMercury).toEqual(.24);
  });

  test('should construct an object with the multiplier for Venus', () => {
    expect(galactic.modVenus).toEqual(.62);
  });

  test('should construct an object with the multiplier for Mars', () => {
    expect(galactic.modMars).toEqual(1.88);
  });

  test('should construct an object with the multiplier for Jupiter', () => {
    expect(galactic.modJupiter).toEqual(11.86);
  });

  test('should return input age multiplied by the number for the selected planet', () => {
    expect(galactic.getAge(20, "Mars")).toEqual(37.6);
  })

});
