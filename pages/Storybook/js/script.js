// Handle color selection
const colorCircles = document.querySelectorAll(".color-circle");
colorCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    colorCircles.forEach((c) => c.classList.remove("selected"));
    circle.classList.add("selected");
  });
});

// Handle theme selection
const themeButtons = document.querySelectorAll(".theme-btn");
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    themeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Handle avatar selection
const avatars = document.querySelectorAll(".avatar");
avatars.forEach((avatar) => {
  avatar.addEventListener("click", () => {
    avatars.forEach((a) => (a.style.border = "2px solid #eee"));
    avatar.style.border = "2px solid #4a90e2";
  });
});

// Submit button click
document.querySelector(".btn-submit").addEventListener("click", () => {
  alert("✨ Storybook Created Successfully!");
});
