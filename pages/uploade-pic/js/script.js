const fileInput = document.getElementById("photoInput");
const previewContainer = document.getElementById("previewContainer");
const submitBtn = document.querySelector(".submit-btn");
const toastContainer = document.querySelector(".toast-container");

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  previewContainer.innerHTML = "";

  if (file) {
    if (!file.type.startsWith("image/")) {
      showToast("⚠️ Only image files are allowed!", "error");
      fileInput.value = "";
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      showToast("⚠️ File size must be under 2MB!", "error");
      fileInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      previewContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

submitBtn.addEventListener("click", () => {
  const file = fileInput.files[0];

  if (!file) {
    showToast("⚠️ Please select an image before submitting!", "error");
    return;
  }

  showToast("✅ Photo uploaded successfully!", "success");

  // Simulate sending to server
  console.log("Uploaded file:", file.name);
  fileInput.value = "";
  previewContainer.innerHTML = "";
});
