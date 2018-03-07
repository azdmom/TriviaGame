// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// first create an array of questions with answers
//     q1:a1,
//     q2:a2,
//     etc,

// onclick, show question
// give question 30 seconds on the screen, then 

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

// pop up screen is called modal, w/ image is called light box
$(document).ready(function(){
  
    
var triviaGame = {
myQuestions : [
    {
      question: "A cloud is made up of a large group of small : ",
      choices: {
        a: "Clouds",
        b: "Tears from heaven",
        c: "water droplets"
      },
      correctAnswer: "c"
    },
    {
        question: "Clouds that seem flat and featureless, and appearing as layered sheets are called : ",
        choices: {
          a: "Duvets",
          b: "Cumulus",
          c: "Stratus",
          d: "Cirrus"
        },
        correctAnswer: "c"
      },
      {
        question: "Clouds that seem puffy, like cotton floating in the sky are called : ",
        choices: {
            a: "Bunnies",
            b: "Cumulus",
            c: "Stratus",
            d: "Cirrus"
        },
        correctAnswer: "b"
      },
      {
        question: "Clouds that seem thin and wispy, appearing high in the sky are called : ",
        choices: {
            a: "Stuck-up",
            b: "Cumulus",
            c: "Stratus",
            d: "Cirrus" 
        },
        correctAnswer: "d"
      },
      {
        question: "On the planet Venus, the clouds are made of: ",
        choices: {
          a: "Cotton candy",
          b: "Sulfur-dioxide",
          c: "Water",
          d: "The tears of many men",
        },
        correctAnswer: "b"

    }],
};
});