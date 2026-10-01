const submitBtn = document.querySelector(".btn-submit");
const textarea = document.getElementById("hairstyleInput");
const toastContainer = document.querySelector(".toast-container");

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  toastContainer.appendChild(toast);

  // Remove after animation
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

submitBtn.addEventListener("click", () => {
  const input = textarea.value.trim();

  if (input.length === 0) {
    showToast("⚠️ Please enter a hairstyle!", "error");
  } else {
    showToast("✅ Hairstyle submitted: " + input, "success");

    // Save to array (or localStorage if needed)
    let hairstyles = JSON.parse(localStorage.getItem("hairstyles")) || [];
    hairstyles.push(input);
    localStorage.setItem("hairstyles", JSON.stringify(hairstyles));

    textarea.value = ""; // clear field
  }
});
