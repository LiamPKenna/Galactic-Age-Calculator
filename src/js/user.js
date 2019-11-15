export class User {
  constructor(age, gender, health) {
    this.age = age;
    this.gender = gender;
    this.health = health;
    this.aveLEM = 76;
    this.aveLEF = 81;
    this.aveLEN = 79;
    this.lifeExpectancy = this.getLifeExpectancy();
  }

  getLifeExpectancy() {
    const baselE = this[`aveLE${this.gender}`];
    return baselE + Math.floor((this.health-5)/15 * baselE);
  }

}
