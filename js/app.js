'use strict';

//Variables
var myCountries = ['Congo', 'Uganda', 'Rwanda', 'Kenya', 'Burundi'];

// alert('Am I starting to get it');
// var userName = prompt('What is your name?');
// console.log('user\'s name is:' + userName );

var birthCountry = prompt ('What is my country of origin? Here are some choices: \n' + 
'1. ' + myCountries[0] + '\n' + 
'2. ' + myCountries[1] + '\n' + 
'3. ' + myCountries[2] + '\n' + 
'4. ' + myCountries[3] + '\n' + 
'5. ' + myCountries[4]);

console.log(birthCountry);

if(birthCountry === '1') {
  alert('You guessed Congo -- that is correct!');
}
else {
  alert('Sorry, that was not correct');
}





// console.log('country of origin:' + birthCountry);

// var residentPeriod = prompt ('How long have you been in the US?');
// console.log('period of stay:' + residentPeriod);

// var curentHobbies = prompt ('What is your current hobbies?');
// console.log('My hobbies are:'+ curentHobbies);


// var userConfirm = confirm('user\'s name is' + userName );
// console.log('Confirm: '+ userConfirm);



// My starting to understanding 
// I will continue to work on this project
