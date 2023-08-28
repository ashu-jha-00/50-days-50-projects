const circles = document.querySelectorAll(".circle"),
  progressBar = document.querySelectorAll(".indicator"),
  buttons = document.querySelectorAll("button");

let currStep = 1;

const updateSteps = (e) => {
  currStep = e.target.id === "next" ? ++currStep : --currStep;
  console.log(currStep);

  circles.forEach((circle, index) => {
    circle.classList[`${index < currStep ? "add" : "remove"}`]("active");
  });

  const progressWidth = ((currStep - 1) / (circles.length - 1)) * 100;
  progressBar.forEach((indicator) => {
    indicator.style.width = `${progressWidth}%`;
  });

  if (currStep === circles.length) {
    buttons[1].disabled = true;
  } else if (currStep === 1) {
    buttons[0].disabled = true;
  } else {
    buttons.forEach((button) => (button.disabled = false));
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", updateSteps);
});
