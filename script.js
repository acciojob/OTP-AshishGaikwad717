// Select all the input fields
const inputs = Array.from(document.querySelectorAll(".code"));

inputs.forEach((input, index) => {
  // Move to the next input on typing
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // Handle backspace key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (!input.value && index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
