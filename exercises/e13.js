import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  const sumOfTemps = data.planets.reduce((acc, planet) => {
    return acc + planet.avgTemp;
  }, 0);

  let avgOfTemps = sumOfTemps / data.planets.length;
  return avgOfTemps;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
