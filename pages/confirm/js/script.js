// Toast
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

// Modal
const editBtn = document.querySelector(".btn-edit");
const modal = document.getElementById("editModal");
const closeBtn = modal.querySelector(".close");
const cancelBtn = modal.querySelector(".btn-cancel");
const saveBtn = modal.querySelector(".btn-save");
const addressText = document.getElementById("address-text");
const newAddress = document.getElementById("newAddress");

editBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  newAddress.value = addressText.textContent.trim();
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
cancelBtn.addEventListener("click", () => (modal.style.display = "none"));

saveBtn.addEventListener("click", () => {
  if (newAddress.value.trim() === "") {
    showToast("⚠️ Address cannot be empty", "error");
    return;
  }
  addressText.textContent = newAddress.value.trim();
  modal.style.display = "none";
  showToast("✅ Address updated successfully!", "success");
});

// Confirm button
document.querySelector(".btn-confirm").addEventListener("click", () => {
  showToast("✅ Order confirmed successfully!", "success");
});
