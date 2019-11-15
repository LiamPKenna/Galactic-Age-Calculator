export function buildPlanetInfo(planet, user) {
  const planetAge = user[`age${planet}`];
  const planetLE = user[`lifeExpectancy${planet}`];
  const planetYL = user[`yearsLeft${planet}`];
  let result = `
  <h3>Your age in ${planet} years is: ${planetAge}</h3>
  <h3>Your life expectancy is ${planetLE} ${planet} years</h3>
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
  return result;
}
