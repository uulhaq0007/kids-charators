// Orders data array
const orders = [
  {
    source: "etsy",
    number: "1123 ✅",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
  {
    source: "etsy",
    number: "1234 ✅",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
  {
    source: "etsy",
    number: "1234 ❌",
    link: "no ⚠️",
    personalized: "no ⚠️",
    address: "no",
    pdf: true,
  },
  {
    source: "etsy",
    number: "3456 ✅",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
  {
    source: "etsy",
    number: "5677 ✅",
    link: "yes",
    personalized: "yes",
    address: "yes ⚠️",
    pdf: true,
  },
  {
    source: "etsy",
    number: "5667 ❌",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
  {
    source: "etsy",
    number: "5565 ✅",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
  {
    source: "amazon",
    number: "3434 ✅",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
  {
    source: "amazon",
    number: "3450 ✅",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
  {
    source: "amazon",
    number: "6767 ❌",
    link: "no ⚠️",
    personalized: "no ⚠️",
    address: "no",
    pdf: true,
  },
  {
    source: "amazon",
    number: "4545 ✅",
    link: "yes",
    personalized: "yes",
    address: "no",
    pdf: true,
  },
];

// Toast function
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `show ${type}`;
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2500);
}

// Render table rows
function renderTable() {
  const tbody = document.querySelector("#ordersTable tbody");
  tbody.innerHTML = "";

  orders.forEach((order, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${order.source}</td>
      <td>${order.number}</td>
      <td class="${getClass(order.link)}">${order.link}</td>
      <td class="${getClass(order.personalized)}">${order.personalized}</td>
      <td class="${getClass(order.address)}">${order.address}</td>
      <td><span class="pdf-icon" data-index="${index}">📄</span></td>
    `;

    tbody.appendChild(tr);
  });

  // Attach click events to PDF icons
  document.querySelectorAll(".pdf-icon").forEach((icon) => {
    icon.addEventListener("click", () => {
      const orderIndex = icon.getAttribute("data-index");
      const order = orders[orderIndex];
      showToast(`📥 Downloading PDF for order ${order.number}`, "success");
    });
  });
}

// Utility: decide class
function getClass(value) {
  if (value.includes("yes")) return "success";
  if (value.includes("no ⚠️") || value.includes("yes ⚠️")) return "warn";
  if (value.includes("no")) return "fail";
  return "";
}

// Initial render
renderTable();
