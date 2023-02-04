import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  let maxYears = data.asteroids.reduce((acc, asteroid) => {
    let key = asteroid.discoveryYear;
    let value = acc[key] ?? 0;
    return {
      ...acc,
      [key]: value + 1,
    };
  }, {});

  let greatestYear = Object.keys(maxYears).reduce((a, b) => maxYears[a] > maxYears[b] ? a : b);
  return Number(greatestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
