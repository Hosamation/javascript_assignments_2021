// Assginment 01
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let fName = zName.split(' ');
    return `${fName[0][0].toUpperCase()}${fName[0].substring(1)} ${fName[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `Your Age Is ${Math.trunc(parseInt(zAge))}`
  }
  function countryWithMessage(zCountry) {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryWithMessage(zCountry)}`
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

// Assginment 02
// function itsMe() {
//   return `Iam A Normal Function`;
// }
let itsMe = itsMe => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function

// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;


console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// Assignment 03
