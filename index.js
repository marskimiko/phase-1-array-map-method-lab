const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
  //return tutorials
//}

const titleCased = () => {
  //return tutorials.map(function(tutorials){
    return tutorials.map((tutorials) => {
    const tutorial = tutorials.split(' ');
    for (let i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i][0].toUpperCase() + tutorial[i].slice(1);
    }
  return tutorial.join(' ');
  })
}

titleCased(tutorials);