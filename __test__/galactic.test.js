import { Calculator } from './../src/js/galactic.js';
import { User } from './../src/js/user.js';

describe('Calculator', () => {

  let calculator;
  let user;

  beforeEach(() => {
    calculator = new Calculator();
    user = new User(20, "N", 7);
  });

  test('should construct an object containing an array of available planets', () => {
    expect(calculator.planets).toEqual(['Mercury','Venus','Mars','Jupiter']);
  });

  test('should construct an object with the multiplier for Mercury', () => {
    expect(calculator.modMercury).toEqual(.24);
  });

  test('should construct an object with the multiplier for Venus', () => {
    expect(calculator.modVenus).toEqual(.62);
  });

  test('should construct an object with the multiplier for Mars', () => {
    expect(calculator.modMars).toEqual(1.88);
  });

  test('should construct an object with the multiplier for Jupiter', () => {
    expect(calculator.modJupiter).toEqual(11.86);
  });

  test('should return input age multiplied by the number for the selected planet', () => {
    expect(calculator.getAge(20, "Mars")).toEqual(37);
  });

  test('should return user\'s life expectancy for the selected planet', () => {
    expect(calculator.getPlanetLE(user.lifeExpectancyEarth, 'Venus')).toEqual(55);
  });

  test('should return user age in mayfly lifespans', () => {
    expect(calculator.getAgeInMayflyLives(20)).toEqual(2102400);
  });

  test('should calculate user age relative to the age of the sun', () => {
    expect(calculator.getAgeRelativeToSun(20)).toEqual(4.344992396263306e-9);
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

  test('should determine how many years a user has left to live on each planet', () => {
    expect(user.yearsLeftVenus).toEqual(43);
  });

  test('should calculate user age compared to sun age and mayfly lifespan', () => {
    expect(user.ageRelativeToSun).toEqual(4.344992396263306e-9);
    expect(user.ageInMayflyLives).toEqual(2102400);
  });

});
