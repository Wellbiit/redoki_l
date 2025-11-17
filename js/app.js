ddocument.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav")?.querySelector("ul");

  let overlay = document.getElementById("navOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "navOverlay";
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);
  }

  if (burger && nav) {
    const closeMenu = () => {
      document.body.classList.remove("nav-open");
      nav.classList.remove("show");
      burger.classList.remove("open");
      burger.textContent = "☰";
    };

    const toggleMenu = () => {
      const isOpen = document.body.classList.toggle("nav-open");
      if (isOpen) {
        nav.classList.add("show");
        burger.classList.add("open");
        burger.textContent = "✕";
      } else {
        closeMenu();
      }
    };

    burger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);
  }

  //Перевірка повторного пароля при реєстрації =====
  const pass = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  if (pass && confirm) {
    confirm.addEventListener("input", () => {
      if (confirm.value !== pass.value) {
        confirm.classList.add("invalid");
      } else {
        confirm.classList.remove("invalid");
      }
    });
  }
});
