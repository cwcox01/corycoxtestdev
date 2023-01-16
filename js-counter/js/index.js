let countIncrease = document.querySelector(".btn-increase");
let countDecrease = document.querySelector(".btn-decrease");
let countReset = document.querySelector(".btn-reset");
let numberCount = document.querySelector(".number-counter");
let zeroValue = 0;

countIncrease.addEventListener("click", increaseCount);
countDecrease.addEventListener("click", decreaseCount);
countReset.addEventListener("click", reset);

function increaseCount() {
  let countIncreaseDisplay = zeroValue++;
  numberCount.innerHTML = countIncreaseDisplay;
  return;
}

function decreaseCount() {
  let countDecreaseDisplay = zeroValue--;
  numberCount.innerHTML = countDecreaseDisplay;
  return;
}

function reset() {
  numberCount.innerHTML = 0;
  return;
}
