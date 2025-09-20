// Global scope variable
let box = document.querySelector(".box");

// Function with parameters & return value
function changeBoxColor(element, color) {
  element.style.backgroundColor = color;
  return `Color changed to ${color}`;
}

// Local scope example
function startBounce() {
  let localMessage = "Bouncing started"; // local variable
  box.classList.add("bouncing");
  return localMessage;
}

// Stop animation
function stopBounce() {
  box.classList.remove("bouncing");
  return "Bouncing stopped";
}

// Demonstration
console.log(changeBoxColor(box, "purple")); // logs returned value