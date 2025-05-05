const thumb = document.getElementById("slider-thumb");
const track = document.getElementById("slider-track");
const container = document.querySelector(".slider-container");
const charAmount = document.querySelector(".character--amount");

const min = 4;
const max = 16;
const step = 1;
const range = max - min;

function updateSlider(value) {
  const percentage = ((value - min) / range) * 100;
  thumb.style.left = `${percentage}%`;
  track.style.width = `${percentage}%`;
  charAmount.textContent = value;
}

let currentValue = 10;
updateSlider(currentValue);

container.addEventListener("click", (e) => {
  const rect = container.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
  const newValue = Math.round((percentage * range) / step) * step + min;
  currentValue = Math.max(min, Math.min(max, newValue));
  updateSlider(currentValue);
});

thumb.addEventListener("mousedown", () => {
  const onMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.min(Math.max(offsetX / rect.width, 0), 1);
    const newValue = Math.round((percentage * range) / step) * step + min;
    currentValue = Math.max(min, Math.min(max, newValue));
    updateSlider(currentValue);
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});
