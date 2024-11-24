const inputs = [
  document.querySelector(".code-1"),
  document.querySelector(".code-2"),
  document.querySelector(".code-3"),
  document.querySelector(".code-4"),
  document.querySelector(".code-5"),
  document.querySelector(".code-6"),
];

inputs.forEach((input, index) => {
  // Handle input event
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus(); // Move to the next input
    }
  });

  // Handle backspace event
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus(); // Move to the previous input
    }
  });
});
