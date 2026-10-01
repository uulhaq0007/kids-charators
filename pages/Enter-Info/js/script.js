// Option button selection
document.querySelectorAll(".options").forEach((group) => {
  group.addEventListener("click", (e) => {
    if (e.target.classList.contains("option-btn")) {
      group
        .querySelectorAll(".option-btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
    }
  });
});

// Toast function
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `show ${type}`;
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

// Submit logic
document.getElementById("submitBtn").addEventListener("click", () => {
  const name = document.getElementById("childName").value.trim();

  const gender = document.querySelector('[data-group="gender"] .active');
  const skin = document.querySelector('[data-group="skin"] .active');
  const age = document.querySelector('[data-group="age"] .active');

  if (!name || !gender || !skin || !age) {
    showToast("⚠️ Please fill all fields!", "error");
    return;
  }

  const data = {
    name,
    gender: gender.innerText,
    skin: skin.innerText,
    age: age.innerText,
  };

  console.log("Form Data:", data);
  showToast("✅ Info submitted successfully!", "success");
});
