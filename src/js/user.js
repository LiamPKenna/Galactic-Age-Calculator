export class User {
  constructor(age, gender, health) {
    this.age = age;
    this.gender = gender;
    this.health = health;
    this.lifeExpectancy = this.getLifeExpectancy();
  }

  getLifeExpectancy() {
    const aveLEM = 76;
    const aveLEF = 81;
    const aveLEN = 79;
    const baselE = eval(`aveLE${this.gender}`);
    return baselE + Math.floor((this.health-5)/15 * baselE);
  }

}
