import { Galactic } from './../src/js/galactic.js';
import { User } from './../src/js/user.js';

describe('Galactic', () => {

  let galactic;
  let user;

  beforeEach(() => {
    galactic = new Galactic();
    user = new User(20, "N", 7);
  });

  test('should construct an object containing an array of available planets', () => {
    expect(galactic.planets).toEqual(['Mercury','Venus','Mars','Jupiter']);
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
    expect(galactic.getAge(20, "Mars")).toEqual(37);
  });

  test('should return user\'s life expectancy for the selected planet', () => {
    expect(galactic.getPlanetLE(user.lifeExpectancyEarth, 'Venus')).toEqual(55);
  });

});

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(20, "N", 7);
  });

  test('should create a user with input age, gender, and general health (1-10)', () => {
    expect(user.age).toEqual(20);
    expect(user.gender).toEqual("N");
    expect(user.health).toEqual(7);
  });

  test('should calculate life expectancy based on gender and health', () => {
    expect(user.lifeExpectancyEarth).toEqual(89);
  });

  test('should use galactic calculator to get current age for each available planet', () => {
    expect(user.ageMars).toEqual(37);
  });

  test('should use galactic calculator to get life expectancy for each available planet', () => {
    expect(user.lifeExpectancyVenus).toEqual(55);
  });

  // test('should determine how many years a user has left to live on each planet', () => {
  //   expect(user.yearsLeftVenus).toEqual(35);
  // });

});
