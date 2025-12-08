// main.js — Лабораторна робота 4
document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js успішно підключено!");

    //Змінюємо стиль всіх карток книг
    const cards = document.querySelectorAll(".book-card");
    cards.forEach(card => {
        card.style.transition = "0.3s";
        card.style.boxShadow = "0 0 10px rgba(255, 120, 150, 0.4)";
    });

    //Додаємо новий <p> в кінець main
    const mainEl = document.querySelector("main");
    if (mainEl) {
        const newParagraph = document.createElement("p");
        newParagraph.textContent = "Цей елемент додано JavaScript у межах ЛР4.";
        newParagraph.style.marginTop = "20px";
        newParagraph.style.color = "var(--brand)";
        newParagraph.style.fontWeight = "600";
        mainEl.append(newParagraph);
    }

    //Поточна дата у футері
    const dateSpan = document.getElementById("currentDate");
    if (dateSpan) {
        const now = new Date();
        const formatted = now.toLocaleDateString("uk-UA", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
        dateSpan.textContent = formatted;
    }

    //Акордеон "Показати більше"
    const toggleBtn = document.querySelector(".toggle-more");
    const moreBlock = document.querySelector(".more-text");

    if (toggleBtn && moreBlock) {
        toggleBtn.addEventListener("click", () => {
            const isHidden = moreBlock.hasAttribute("hidden");

            if (isHidden) {
                moreBlock.removeAttribute("hidden");
                toggleBtn.textContent = "Приховати";
            } else {
                moreBlock.setAttribute("hidden", "");
                toggleBtn.textContent = "Показати більше";
            }
        });
    }

    //Перемикач теми
    const themeToggle = document.getElementById("themeToggle");

    //Застосовуємо тему, збережену раніше
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        if (themeToggle) themeToggle.textContent = "🌞";
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");

            const isDark = document.body.classList.contains("dark-theme");
            themeToggle.textContent = isDark ? "🌞" : "🌓";

            localStorage.setItem("theme", isDark ? "dark" : "light");
        });
    }

    //Підсвітка меню
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.classList.add("nav-hover");
        });

        link.addEventListener("mouseleave", () => {
            link.classList.remove("nav-hover");
        });
    });

    //Події клавіатури(зміна шрифту)
    let baseFontSize = parseFloat(
        window.getComputedStyle(document.body).fontSize
    ) || 16;
    let currentFontSize = baseFontSize;

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowUp") {
            currentFontSize = Math.min(currentFontSize + 1, baseFontSize + 6);
            document.body.style.fontSize = currentFontSize + "px";
        } else if (event.key === "ArrowDown") {
            currentFontSize = Math.max(currentFontSize - 1, baseFontSize - 4);
            document.body.style.fontSize = currentFontSize + "px";
        } else {
            return;
        }

        event.preventDefault();
    });
});


