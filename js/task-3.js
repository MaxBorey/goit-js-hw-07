const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const handleValue = event.target.value.trim();
  nameOutput.textContent = handleValue === "" ? "Anonymous" : handleValue;
});