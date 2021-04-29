var readlinesync = require("readline-sync");
var score = 0;
var userName = readlinesync.question("May I know your name Please? ");
console.log("Hey " + userName + "!!! Let's Play Bollywood Quiz");
//Define Function
function play(question,answer)
{
  var userAnswer = readlinesync.question(question);
  if (userAnswer === answer)
  {
  console.log("You are Right");
  score = score + 1;
  console.log("---------------");
  }
  else
  {
  console.log("You are Wrong");
  console.log("---------------");
  }
} 
// //Call Function
// play("Who was the villian in Sholay? ", "Gabbar Singh");
// console.log("Your Score is:" + score);
// *Call Function thru objects
var questionOne = {
  question: "Who was the villian in Sholay?" ,
  answer:   "Gabbar Singh"
}
var questionTwo = {
  question: "Who was the protagonist in Gangs of Wasseypur?" ,
  answer:   "Manoj Bajpayee"
}
var questionThree = {
  question: "Which cities does Rani visit when she goes on her 'solo' honeymoon in Queen?" ,
  answer:   "Paris & Amsterdam"
}
var questionFour = {
  question: "Which movie is this groundbreaking line from:Teja main hoon, Mark idhar hai?" ,
  answer:   "Andaz Apna Apna"
}
var questionFive = {
  question: "Which movie is this dialogue from ‘Woh toh main kha gaya … woh main mast tel me fry karke, woh main kha gaya’?" ,
  answer:   "Hera Pheri"
}
var questionSix = {
  question: "In 3 Idiots, what is Rancho's real name?" ,
  answer:   "Ranchhoddas Shamaldas Chanchad"
}
var questionSeven = {
  question: "Fill in the blank ‘I can talk English, I can walk English, I can _____ English’?" ,
  answer:   "laugh"
}
var questionEight = {
  question: "When US president Barack Obama visited India he made a reference to a popular Bollywood dialogue in his speech. What was the dialogue?" ,
  answer:   "Senorita from DDLJ"
}
var questionNine = {
  question: "Who is Gabbar talking to when he asks ‘Kitne Aadmi The’?" ,
  answer:   "Kaalia"
}
var questionTen = {
  question: "In Gangs of Wasseypur who says ’Beta tumse na ho payega’ ?" ,
  answer:   "Ramadhir Singh"
}

var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
for (var i=0; i<questions.length;i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("Your Score is:" + score);

