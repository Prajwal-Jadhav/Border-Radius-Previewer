const element = document.querySelector(".element");
const input = document.getElementById("radius");
const button = document.querySelector(".button");

input.value = "" + input.value;

window.addEventListener("load", function () {
  element.style.borderRadius = String(input.value);
});

input.addEventListener("input", function () {
  input.value = input.value + "";
  element.style.borderRadius = String(input.value);
});

button.addEventListener("click", function () {
  input.select();
  input.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("Value copied: " + input.value);
});
