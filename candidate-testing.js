const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer = [];
let questions = ["Who was the first American woman in space? ",
                "True or false: 5 kilometer == 5000 meters?",
                 "(5 + 3)/2 * 10 = ?",
              "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",
                "What is the minimum crew size for the ISS?"];;
let correctAnswers = ["Sally Ride",
                      "true",
                      "40",
                      "Trajectory",
                      "3"];
let candidateAnswers =[];
let grade;
let numCorrect = 0;
const numQuestions = 5;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name.")
};

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question(question);


for (let i = 0; i < questions.length; i++){
  candidateAnswers.push(input.question(questions[i]));
}



};


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 





 
for (i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i] === correctAnswers[i]) {
    numCorrect++ 
  }
};

grade = (numCorrect / numQuestions) * 100




 
};





function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
 console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  
  
  console.log(`Candidate Name: ${candidateName}`);


console.log(`1) ${questions[0]}`);
console.log(`Your Answer: ${candidateAnswers[0]}`);
console.log(`CorrectAnswer: ${correctAnswers[0]}`);
console.log("\n");

console.log(`2) ${questions[1]} `);
console.log(`Your Answer: ${candidateAnswers[1]}`);
console.log(`CorrectAnswer: ${correctAnswers[1]}`);
console.log("\n");

console.log(`3) ${questions[2]}`);
console.log(`Your Answer: ${candidateAnswers[2]}`);
console.log(`CorrectAnswer: ${correctAnswers[2]}`);
console.log("\n");

console.log(`4) ${questions[3]}`);
console.log(`Your Answer: ${candidateAnswers[3]}`);
console.log(`CorrectAnswer: ${correctAnswers[3]}`);
console.log("\n");

console.log(`5) ${questions[4]}`);
console.log(`Your Answer: ${candidateAnswers[4]}`);
console.log(`CorrectAnswer: ${correctAnswers[4]}`);
console.log("\n");


console.log(`>>> Overall Grade: ${grade} (${numCorrect} of 5 responses correct) <<<`);
console.log
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};