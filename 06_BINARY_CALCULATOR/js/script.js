// Menu Toggle
const btn = document.querySelector("#toggleButton");
const menu = document.querySelector("header nav");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Box Change
const binaryContainer = document.querySelector("#binary-container");
const decimalContainer = document.querySelector("#decimal-container");

const binaryToggle = document.querySelector("#binary-toggle");
const decimalToggle = document.querySelector("#decimal-toggle");

binaryToggle.addEventListener("click", () => {
  binaryContainer.classList.remove("active");
  decimalContainer.classList.add("active");

  binaryToggle.style.color = "rgb(101, 202, 0)";
  decimalToggle.style.color = "#fff";
});

decimalToggle.addEventListener("click", () => {
  decimalContainer.classList.remove("active");
  binaryContainer.classList.add("active");

  binaryToggle.style.color = "#fff";
  decimalToggle.style.color = "rgb(101, 202, 0)";
});

// Conversor Binário-Decimal
const binaryInput = document.querySelector("#binary");

const binaryBtn = document.querySelector(".binary-btn");

const binaryResult = document.querySelector("#binary-result");

const binarySpan = document.querySelector("#binary-result span");

// Validando apenas 0 ou 1
binaryInput.addEventListener("input", (e) => {
  function validBinary(text) {
    return text.replace(/[^0-1]/g, "");
  }

  const updatedValue = validBinary(e.target.value);

  e.target.value = updatedValue;
});

// Cálculo Binário Para Decimal
function binToDec(bin) {
  return parseInt(bin, 2).toString(10);

}

binaryBtn.addEventListener("click", () => {
  binaryResult.style.display = "block";

  binarySpan.textContent = `${binToDec(binaryInput.value)} (dec)`;
});

binaryInput.addEventListener("keyup", () => {
  if (!binaryInput.value) {
    binaryResult.style.display = "none";
  }
});

// Conversor Decimal-Binário
const decimalInput = document.querySelector("#decimal");

const decimalBtn = document.querySelector(".decimal-btn");

const decimalResult = document.querySelector("#decimal-result");

const decimalSpan = document.querySelector("#decimal-result span");

// Validando apenas 0 ou 1
decimalInput.addEventListener("input", (e) => {
  function validBinary(text) {
    return text.replace(/[^0-9,]/g, "");
  }

  const updatedValue = validBinary(e.target.value);

  e.target.value = updatedValue;
});

// Cálculo Decimal para Binário
function decToBin(dec) {
  return (dec >>> 0).toString(2);
}

decimalBtn.addEventListener("click", () => {
  decimalResult.style.display = "block";

  decimalSpan.textContent = `${decToBin(decimalInput.value)} (dec)`;
});

decimalInput.addEventListener("keyup", () => {
  if (!decimalInput.value) {
    decimalResult.style.display = "none";
  }
});
