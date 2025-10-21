const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

// Attach button clicks
buttonsEl.forEach((btn) => {
  btn.addEventListener("click", () => {
    handleInput(btn.textContent);
  });
});

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key.toUpperCase() === "C") {
    clearResult();
  }
});

// Core functions
function handleInput(value) {
  if (value === "C") {
    clearResult();
  } else if (value === "=") {
    calculateResult();
  } else {
    appendValue(value);
  }
}

function clearResult() {
  inputFieldEl.value = "";
}

function deleteLast() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}

function calculateResult() {
  try {
    inputFieldEl.value = eval(inputFieldEl.value); // 
  } catch {
    inputFieldEl.value = "Error";
  }
}

function appendValue(val) {
  inputFieldEl.value += val;
}
