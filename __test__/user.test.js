import { User } from './../src/js/user.js';

describe('User', () => {

  let user;

  beforeEach(() => {
    user = new User(20, "N", 7);
  });

  test('should create a user with input age, gender, and general health (1-10)', () => {
    expect(user.age).toEqual(20);
    expect(user.gender).toEqual("N");
    expect(user.health).toEqual(7);
  })

});
