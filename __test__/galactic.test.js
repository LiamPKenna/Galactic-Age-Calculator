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

  test('should construct an object with the length of a year on Mercury in Earth years', () => {
    expect(calculator.modMercury).toEqual(.24);
  });

  test('should construct an object with the length of a year on Venus in Earth years', () => {
    expect(calculator.modVenus).toEqual(.62);
  });

  test('should construct an object with the length of a year on Mars in Earth years', () => {
    expect(calculator.modMars).toEqual(1.88);
  });

  test('should construct an object with the length of a year on Jupiter in Earth years', () => {
    expect(calculator.modJupiter).toEqual(11.86);
  });

  test('should return input age divided by the number for the selected planet', () => {
    expect(calculator.getAge(20, "Mars")).toEqual(10);
  });

  test('should return user\'s life expectancy for the selected planet', () => {
    expect(calculator.getPlanetLE(user.lifeExpectancyEarth, 'Venus')).toEqual(143);
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
    expect(user.ageMars).toEqual(10);
  });

  test('should use galactic calculator to get life expectancy for each available planet', () => {
    expect(user.lifeExpectancyVenus).toEqual(143);
  });

  test('should determine how many years a user has left to live on each planet', () => {
    expect(user.yearsLeftVenus).toEqual(111);
  });

  test('should calculate user age compared to sun age and mayfly lifespan', () => {
    expect(user.ageRelativeToSun).toEqual(4.344992396263306e-9);
    expect(user.ageInMayflyLives).toEqual(2102400);
  });

});
