const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const pre = [];

const home = document.querySelector("form");
console.log(guess);
const submit = document.querySelector("#subt");
const previous = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const result = document.querySelector("#results");

home.addEventListener("submit", (e) => {
  e.preventDefault();
  const guess = document.querySelector("#guessField").value;
  document.querySelector("#guessField").focus();
  console.log(guess);
  valid(guess);
});

function valid(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.innerHTML = "Invalid Input";
    document.querySelector("#guessField").value = "";
  } else {
    check(guess);
  }
}

function check(guess) {
  if (remaining.textContent > 1) {
    if (guess < randomNumber) {
      pre.push(guess);
      result.innerHTML = "Number is too low";
      result.style.color = "white";

      document.querySelector("#guessField").value = "";
      remaining.textContent = remaining.textContent - 1;
    } else if (guess > randomNumber) {
      pre.push(guess);
      result.innerHTML = "Number is too high";
      result.style.color = "white";
      document.querySelector("#guessField").value = "";
      remaining.textContent = remaining.textContent - 1;
    } else if (guess == randomNumber) {
      result.style.color = "#1fd655";
      result.innerHTML = "Congratualtion! you won";
      submit.disabled = true;
    }
  } else {
    result.style.color = " 	#EE4B2B";
    result.innerHTML = `Get Better...reload to retry`;
    remaining.textContent = 0;
    submit.disabled = true;
  }

  previous.innerHTML = `${pre}`;
}
