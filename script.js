
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Mobile navigation menu
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// WhatsApp enquiry form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    const whatsappNumber = "9665610609395";

    const enquiry = [
      "New Website Enquiry - ProSafe Fire System",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Project Details: ${message}`
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`;

      if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
  alert("Please enter a valid phone number.");
  return;
}
    window.open(whatsappURL, "_blank");
  });
}
