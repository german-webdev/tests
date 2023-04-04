const data = [
  { 
    firstName: 'Emily', 
    lastName: 'N.', 
    country: 'Ireland', 
    continent: 'Europe', 
    age: 30, 
    language: 'Ruby' 
  },

  { 
    firstName: 'Nor', 
    lastName: 'E.', 
    country: 'Malaysia', 
    continent: 'Asia', 
    age: 20, 
    language: 'Clojure' 
  }
];

const createUsernames = users => {
  function getYearOfBirth(age) {
    return new Date().getFullYear() - age;
  }

  users.forEach(e => e.username = `${e.firstName}${e.lastName.split('.').join('')}${getYearOfBirth(e.age)}`.toLowerCase());
  
  return users;
}
const processedData = createUsernames(data);
console.log(processedData); // [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];