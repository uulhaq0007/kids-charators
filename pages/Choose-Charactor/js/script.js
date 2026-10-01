// Character selection
const characters = document.querySelectorAll(".character");
const submitBtn = document.querySelector(".btn-submit");

// Initially disable submit
submitBtn.disabled = true;

characters.forEach((char) => {
  char.addEventListener("click", () => {
    characters.forEach((c) => c.classList.remove("selected"));
    char.classList.add("selected");

    // Enable submit once a character is selected
    submitBtn.disabled = false;
  });
});

// Toast creator
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.classList.add("toast", type);

  const icon = document.createElement("span");
  icon.style.marginRight = "8px";
  icon.innerHTML = type === "success" ? "✅" : "⚠️";

  const text = document.createElement("span");
  text.textContent = message;

  toast.appendChild(icon);
  toast.appendChild(text);

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Handle submit
submitBtn.addEventListener("click", () => {
  const selected = document.querySelector(".character.selected");
  if (selected) {
    const label = selected.querySelector("label").textContent;
    showToast("🎉 You chose: " + label, "success");
  } else {
    showToast("⚠️ Please select a character first", "error");
  }
});
