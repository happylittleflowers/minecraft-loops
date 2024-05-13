// Functionize Minecraft Fishing Start Code
// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let sortfishBtn = document.getElementById("sortfish");
let fishamount = document.getElementById("fishamount");

// Fish Count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnclicked);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
sortfishBtn.addEventListener("click", sortfish);
fishamount.addEventListener("click", fishamount);

function fishBtnclicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    // Steve Fish Stimulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else if (character === "alex") {
    // Alex Fish Stimulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
    }
  } else character === "villager";
  // Villager Fish Stimulator
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.2) {
    resultImg.src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
  } else if (randNum < 0.5) {
    resultImg.src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
  } else if (randNum < 0.7) {
    resultImg.src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
  } else {
    resultImg.src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
  }
}

function fishOnce() {}
function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnclicked();
  }
}
function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnclicked();
    count++;
  }
  console.log(count);
}
function sortfish() {
  let fish = sortfishBtn;
}
for (let g = 20; g <= 45; g++) {
  fishBtnclicked();
}
