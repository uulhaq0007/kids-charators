// Sparkle generator
const sparklesContainer = document.getElementById("sparkles");
const sparkleEmojis = ["✨", "🌟", "⭐", "💫"];

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.textContent =
    sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
  sparkle.style.left = Math.random() * 280 + "px";
  sparkle.style.bottom = "20px";
  sparklesContainer.appendChild(sparkle);

  // Remove sparkle after animation ends
  setTimeout(() => sparkle.remove(), 2000);
}

// Emit sparkles every 500ms
setInterval(createSparkle, 500);

// Progress complete message
setTimeout(() => {
  document.querySelector("h1").textContent =
    "🎉 Magic complete! Your book cover is ready!";
}, 8500);
