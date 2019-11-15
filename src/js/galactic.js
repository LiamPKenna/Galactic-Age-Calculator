export class Galactic {
  constructor() {
    this.modMercury = .24;
    this.modVenus = .62;
    this.modMars = 1.88;
    this.modJupiter = 11.86;
  }

  getAge(earthAge, planet) {
    return Math.floor(earthAge * this[`mod${planet}`]);
  }

  getPlanetLE(user, planet) {
    const planetLE = Math.floor(user.lifeExpectancy * this[`mod${planet}`]);
    return planetLE;
  }

}
