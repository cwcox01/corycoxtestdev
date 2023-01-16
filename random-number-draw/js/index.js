let numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let resetListener = document.querySelector(".reset-btn");

let drawListener = document.querySelector(".draw-btn");

let numberDrawn = document.querySelector(".number-drawn");

drawListener.addEventListener("click", numberGenerator);

resetListener.addEventListener("click", resetNumber);

function numberGenerator() {
  let randomNumber = numberArray[Math.floor(Math.random() * 20)];
  numberDrawn.innerHTML = randomNumber;
}

function resetNumber() {
  let valueZero = 0;
  numberDrawn.innerHTML = valueZero;
}
