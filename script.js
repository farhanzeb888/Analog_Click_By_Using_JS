// Get references to DOM elements
const body = document.querySelector('body'),
      hourHand = document.querySelector('.hour'),
      minuteHand = document.querySelector('.minute'),
      secondHand = document.querySelector('.second'),
      modeSwitch = document.querySelector('.mode-switch');

// Apply saved theme mode on page load
if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  modeSwitch.textContent = "Light Mode";
}

// Add a click event listener to modeSwitch
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

// Function to update clock hands
const updateTime = () => {
  let date = new Date(),
      secToDeg = (date.getSeconds() / 60) * 360,
      minToDeg = (date.getMinutes() / 60) * 360,
      hrToDeg = (date.getHours() / 12) * 360;

  // Rotate the clock hands based on the current time
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

// Call updateTime every second
setInterval(updateTime, 1000);

// Run once on page load
updateTime();
