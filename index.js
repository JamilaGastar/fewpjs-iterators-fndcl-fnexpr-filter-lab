// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, passedInName) {
    return drivers.filter((driverName) => driverName.toUpperCase() === passedInName.toUpperCase())
}

console.log(findMatching(drivers, "Ben"));

function fuzzyMatch(drivers, passedInFirstTwoLetters) {
    return drivers.filter((driverName) => driverName.substring(0,2) === passedInFirstTwoLetters)
}
console.log(fuzzyMatch(drivers, "Ne"));

const newDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(newDrivers, passedInName) {
    return newDrivers.filter((e) => e.name === passedInName);
}
console.log(matchName(newDrivers, 'Bobby'));