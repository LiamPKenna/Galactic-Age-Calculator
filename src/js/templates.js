export function buildPlanetInfo(planet, user) {
  const planetAge = user[`age${planet}`];
  const planetLE = user[`lifeExpectancy${planet}`];
  const planetYL = user[`yearsLeft${planet}`];
  let result = `
    <h3>Your age in ${planet} years is: ${planetAge}</h3>
    <br>
    <h3>Your life expectancy is ${planetLE} ${planet} years</h3>
    <br>
  `;
  if (planetLE > planetAge) {
    result += `
      <h4>That means you could expect to live ${planetYL} more years!</h4>
    `;
  } else {
    result += `
      <h4>That means you already lived ${planetYL*-1} more years than average!</h4>
    `;
  }
  result += `
    <br>
    <button type="button" id="close" class="btn btn-secondary btn-lg btn-block">Close</button>
  `;
  return result;
}

export function buildSunInfo(user) {
  return `
    <h3>Your age relative to the sun is: ${user.ageRelativeToSun} years old.</h3><br>
    <h3>If that makes you feel like a tiny speck of dust, take heart. You have already lived the equivalent of ${user.ageInMayflyLives} mayfly lifetimes!</h3>
    <br>
    <button type="button" id="close" class="btn btn-secondary btn-lg btn-block">Close</button>
  `;
}
