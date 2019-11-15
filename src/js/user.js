import { Galactic } from './galactic.js';

export class User {
  constructor(age, gender, health) {
    this.age = age;
    this.gender = gender;
    this.health = health;
    this.lifeExpectancyEarth = this.getLifeExpectancy();
    this.getGalacticAge();
    this.getGalacticLifeExpectancy();
  }

  getLifeExpectancy() {
    const aveLEM = 76;
    const aveLEF = 81;
    const aveLEN = 79;
    const baselE = eval(`aveLE${this.gender}`);
    return baselE + Math.floor((this.health-5)/15 * baselE);
  }

  getGalacticAge() {
    let galactic = new Galactic();
    galactic.planets.forEach(planet => {
      const planetAge = galactic.getAge(this.age, planet);
      this[`age${planet}`] = planetAge;
    });
  }

  getGalacticLifeExpectancy() {
    let galactic = new Galactic();
    galactic.planets.forEach(planet => {
      const planetLE = galactic.getPlanetLE(this.lifeExpectancyEarth, planet);
      this[`lifeExpectancy${planet}`] = planetLE;
    });
  }

  // getYearsLeft() {
  //   let galactic = new Galactic();
  //   galactic.planets.forEach(planet => {
  //     const planetYL = (this.lifeExpectancyEarth, planet);
  //     this[`lifeExpectancy${planet}`] = planetLE;
  //   });
  // }

}
