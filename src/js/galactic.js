export class Galactic {
  constructor() {
    this.planets = ['Mercury','Venus','Mars','Jupiter'];
    this.modMercury = .24;
    this.modVenus = .62;
    this.modMars = 1.88;
    this.modJupiter = 11.86;
  }

  getAge(earthAge, planet) {
    return Math.floor(earthAge * this[`mod${planet}`]);
  }

  getPlanetLE(earthlifeExpectancy, planet) {
    const planetLE = Math.floor(earthlifeExpectancy * this[`mod${planet}`]);
    return planetLE;
  }

  getAgeRelativeToSun(age) {
    let ageOfSun = 4603000000;
    return age/ageOfSun;
  }

  getAgeInMayflyLives(age) {
    const mayflyLivesPerYear = 105120;
    return age*mayflyLivesPerYear;
  }

}
