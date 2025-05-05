const password = document.querySelector(".password");
const checkGroups = [
  document.querySelectorAll(".icon-check-one"),
  document.querySelectorAll(".icon-check-two"),
  document.querySelectorAll(".icon-check-three"),
  document.querySelectorAll(".icon-check-four"),
];
const radios = document.querySelectorAll(".radio--input");

let visibilityStates = [false, false, false, false];

radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    const checks = checkGroups[index];

    visibilityStates[index] = !visibilityStates[index];
    checks.forEach((check) => {
      check.style.visibility = visibilityStates[index] ? "visible" : "hidden";
    });
  });
});
