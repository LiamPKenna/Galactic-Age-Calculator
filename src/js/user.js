import { Calculator } from './galactic.js';

export class User {
  constructor(age, gender, health) {
    this.calculator = new Calculator();
    this.age = age;
    this.gender = gender;
    this.health = health;
    this.lifeExpectancyEarth = this.getLifeExpectancy();
    this.getGalacticAge();
    this.getGalacticLifeExpectancy();
    this.getYearsLeft();
    this.getSunAndMayflyAge();
  }

  getLifeExpectancy() {
    const averageLE = {"F":81,"N":79,"M":76};
    const baselE = averageLE[this.gender];
    return baselE + Math.floor((this.health-5)/15 * baselE);
  }

  getGalacticAge() {
    this.calculator.planets.forEach(planet => {
      const planetAge = this.calculator.getAge(this.age, planet);
      this[`age${planet}`] = planetAge;
    });
  }

  getGalacticLifeExpectancy() {
    this.calculator.planets.forEach(planet => {
      const planetLE = this.calculator.getPlanetLE(this.lifeExpectancyEarth, planet);
      this[`lifeExpectancy${planet}`] = planetLE;
    });
  }

  getYearsLeft() {
    this.calculator.planets.forEach(planet => {
      const planetYL = this[`lifeExpectancy${planet}`] - this[`age${planet}`];
      this[`yearsLeft${planet}`] = planetYL;
    });
  }

  getSunAndMayflyAge() {
    this.ageRelativeToSun = this.calculator.getAgeRelativeToSun(this.age);
    this.ageInMayflyLives = this.calculator.getAgeInMayflyLives(this.age);
  }

}
