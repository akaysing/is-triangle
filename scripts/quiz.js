const quizform = document.querySelector(".main-container");
const submitBtn = document.querySelector(".btn-submit");
const outputMessage = document.querySelector(".output");

const correctAnswers = ["90°", "right", "equilateral", "two sides are equal", "45°"];

function calculateScore() {
  const formResults = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  // console.log("The score is "+score);
  outputMessage.innerText = `The Score is ${score}`;
}

submitBtn.addEventListener("click", calculateScore);