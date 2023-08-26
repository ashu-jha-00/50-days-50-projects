const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function handleClick(event) {
    // console.log("clicked", event);
    removeactiveclass();
    panel.classList.add("active");
  });
});

function removeactiveclass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
