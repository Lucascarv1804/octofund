// Box Change
const octalContainer = document.querySelector("#octal-container");
const decimalContainer = document.querySelector("#decimal-container");

const octalToggle = document.querySelector("#octal-toggle");
const decimalToggle = document.querySelector("#decimal-toggle");

octalToggle.addEventListener("click", () => {
  octalContainer.classList.remove("active");
  decimalContainer.classList.add("active");

  octalToggle.style.color = "#00bf63";
  decimalToggle.style.color = "#fff";
});

decimalToggle.addEventListener("click", () => {
  decimalContainer.classList.remove("active");
  octalContainer.classList.add("active");

  octalToggle.style.color = "#fff";
  decimalToggle.style.color = "#00bf63";
});

// Conversor Octal-Decimal
const octalInput = document.querySelector("#octal");

const octalBtn = document.querySelector(".octal-btn");

const octalResult = document.querySelector("#octal-result");

const octalSpan = document.querySelector("#octal-result span");

// Validando apenas números
octalInput.addEventListener("input", (e) => {
  function validoctal(text) {
    return text.replace(/[^0-9,]/g, "");
  }

  const updatedValue = validoctal(e.target.value);

  e.target.value = updatedValue;
});

// Cálculo Octal Para Decimal
function ocToDec(oc) {
  return parseInt(oc, 8).toString(10);
}

octalBtn.addEventListener("click", () => {
  octalResult.style.display = "block";
  octalSpan.textContent = `${ocToDec(octalInput.value)} (dec)`;
});

octalInput.addEventListener("keyup", () => {
  if (!octalInput.value) {
    octalResult.style.display = "none";
  }
});

// Conversor Decimal-Octal
const decimalInput = document.querySelector("#decimal");

const decimalBtn = document.querySelector(".decimal-btn");

const decimalResult = document.querySelector("#decimal-result");

const decimalSpan = document.querySelector("#decimal-result span");

// Validando apenas números
decimalInput.addEventListener("input", (e) => {
  function validoctal(text) {
    return text.replace(/[^0-9,]/g, "");
  }

  const updatedValue = validoctal(e.target.value);

  e.target.value = updatedValue;
});

// Cálculo Decimal para Octal
function decToOc(dec) {
  return parseInt(dec, 10).toString(8);
}

decimalBtn.addEventListener("click", () => {
  decimalResult.style.display = "block";
  
  decimalSpan.textContent = `${decToOc(decimalInput.value)} (oct)`;
});


decimalInput.addEventListener("keyup", () => {
  if (!decimalInput.value) {
    decimalResult.style.display = "none";
  }
});
