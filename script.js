// script.js — Interaktivitas landing page (tanpa framework)

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  const contactForm = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");

  // Toggle menu mobile
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
    const icon = navToggle.querySelector("span");
    if (navList.classList.contains("open")) {
      icon.innerHTML = "<span></span>"; // akan diganti oleh CSS
    }
  });

  // Tutup menu saat klik link
  navList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });

  // Form contact — simulasi kirim tanpa backend
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = "Semua field wajib diisi.";
      formMsg.style.color = "#d92d20";
      return;
    }

    formMsg.textContent = `Terima kasih, ${name}! Pesan dari ${email} sudah terkirim. Kami akan hubungi Anda dalam 1–2 hari kerja.`;
    formMsg.style.color = "#059669";
    contactForm.reset();

    // Simulasi delay (jika ingin integrasi API asli, ganti dengan fetch ke endpoint Anda)
    setTimeout(() => {
      formMsg.textContent = `Terima kasih, ${name}! Pesan dari ${email} sudah terkirim. Kami akan hubungi Anda dalam 1–2 hari kerja.`;
    }, 600);
  });

  // Smooth scroll untuk link internal
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#" || targetId === "") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
