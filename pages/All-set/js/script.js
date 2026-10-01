const doneButton = document.querySelector(".done-button");

// Toast creator
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  const icon = document.createElement("span");
  icon.style.marginRight = "8px";
  icon.innerHTML = type === "success" ? "✅" : "📧";

  const text = document.createElement("span");
  text.textContent = message;

  toast.appendChild(icon);
  toast.appendChild(text);
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// Confetti effect
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Add falling animation
const style = document.createElement("style");
style.textContent = `
@keyframes fall {
  to {
    transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
  }
}`;
document.head.appendChild(style);

// Handle button click
doneButton.addEventListener("click", () => {
  showToast("✅ Order Confirmed!", "success");
  setTimeout(() => showToast("📧 Tracking email coming soon!", "info"), 1500);
  launchConfetti();
});
