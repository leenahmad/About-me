'use strict';
let mark = [];

let userName = prompt('Hi to my website what is your name?');
alert('Hi nice to met you' + userName);
let guessingGame = prompt('do you want to play a guessing game? ');
if (guessingGame !== null) {
  guessingGame = guessingGame.toLowerCase();
}



function guessingGameF(){
switch (guessingGame) {
case 'yes':
case 'y':
  //console.log('great !! ,lets start ');
  alert('great !! ,lets start ');
  mark.push(1);
  console.log(mark);
  break;
case 'no':
case 'n':
  //console.log('oh why!!');
  alert('oh why!!');
  break;
default:
  //console.log('you have to answer either yes or no');
  alert('you have to answer either yes or no');
  break;
}}

guessingGameF();



function hotDrinkF(){
let hotdrink = prompt('Do you think i like hotdrink?!');
if (hotdrink !== null) {
  hotdrink = hotdrink.toLowerCase();
}
switch (hotdrink) {
case 'yes':
case 'y':
  // console.log('thats true');
  alert('thats trueee ');
  mark.push(2);
  console.log(mark);
  break;
case 'no':
case 'n':
  // console.log('oh I\like hotDrink!');
  alert('that\'s not true');
  break;
default:
  //  console.log(''I\'m sure that I\'do not like hotDrink !!');
  alert('I\'m sure that not a hotDrink !!');
  break;
}}
hotDrinkF();

function ageF(){
let age = prompt('do you think that I\'m  20 ?');
if (age != null) {
  age = age.toLowerCase();
}
switch (age) {
case 'yes':
case 'y':
  // console.log('thats true ');
  alert('thats true ');
  mark.push(6);
  console.log(mark);
  break;
case 'no':
case 'n':
  // console.log('I wish that I\'m still under 20');
  alert('I wish that I\'m still under 20');
  break;
default:
  //  console.log('oh so what do you think then??!');
  alert('oh so what do you think then??!');
  break;
}}
ageF();


function travelF(){
let travel = prompt('do you think that I\'m love to travel?');
if (travel != null) {
  travel = travel.toLowerCase();
}
switch (travel) {
case 'yes':
case 'y':
  // console.log('thats trueee ');
  alert('thats trueee ');
  mark.push(3);
  console.log(mark);
  break;
case 'no':
case 'n':
  // console.log('you are wrong ');
  alert('you are wrong ');
  break;
default:
  // console.log('you have to guss!!');
  alert('you have to guss!!');
  break;
}}
travelF();

function studyF(){
let study = prompt('do you think that I\'m like to study?');
if (study != null) {
  study = study.toLowerCase();
}
switch (study) {
case 'yes':
case 'y':
  //  console.log('thats trueee ');
  alert('thats trueee ');
  mark.push(4);
  console.log(mark);
  break;
case 'no':
case 'n':
  //console.log('no that\'s wrong');
  alert('no that\'s wrong');
  break;
default:
  // console.log('i think you need to think about it');
  alert('i think you need to think about it');
  break;
}}

studyF();


function numGuessF(){
let num;


for(let i =0; i < 4 ; i++){
  num = Number(prompt('please enter number : '));
  if(num === 5)
  {

    mark.push(5);
    console.log(mark);
    break;
  }
  else if(num > 5){
    alert('is too hight');


  }
  else if(num <5){
    alert('is too low');


  }


}}
numGuessF();


alert ('the correct answer is 5');


function favOSF(){
let favOS = ['windows', 'linux', 'ubuntu','mac'];


for(let i = 0; i<6; i++){
  let answer = prompt('enter a OS type');
  for(let j = 0; j < favOS.length; j++){
    if(answer == favOS[j]){
      alert('correct annswer');
      mark.push(7);
      console.log(mark);
      i =6;

    }
  }
  if(i < 6){
    alert('incorrect answer');
  }

}
alert(favOS);

console.log(mark.length);

alert('mark = ' + mark.length + '/7');

}

favOSF();


