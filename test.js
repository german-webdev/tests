const data = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
  { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
];


const getLanguagesStatistic = (feedbacks) => {

  let newObj = [];

  for (let obj of feedbacks) {
    if ( Object.values(obj).includes(2019) ) {    
      newObj.push(Object.values(Object.fromEntries(Object.entries(obj).filter(e => e.includes('language')))));
      
    }
  }

  return newObj.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})
};

const result = getLanguagesStatistic(data);
console.log(result);
// { 
//   C: 1, 
//   JavaScript: 2 
// }