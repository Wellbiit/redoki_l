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
        newParagraph.textContent = "Readoki Lab4";
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

    //Перемикач теми (localStorage)
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    //Шлях до іконок
    const SUN_ICON = "image/sun_theme.png";
    const MOON_ICON = "image/moon_theme.png";

    if (themeToggle && themeIcon) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeIcon.src = SUN_ICON;
    } else {
        document.body.classList.remove("dark-theme");
        themeIcon.src = MOON_ICON;
    }

    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-theme");

        themeIcon.src = isDark ? SUN_ICON : MOON_ICON;

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });


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

    //Події клавіатури (зміна шрифту)
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

    //Форма для контактів

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");
        const successBox = document.getElementById("formSuccess");

        const fields = [nameInput, emailInput, messageInput];

        const showError = (input, message) => {
            input.classList.add("invalid");
            const errorEl = contactForm.querySelector(
                `.error-msg[data-for="${input.id}"]`
            );
            if (errorEl) errorEl.textContent = message;
        };

        const clearError = (input) => {
            input.classList.remove("invalid");
            const errorEl = contactForm.querySelector(
                `.error-msg[data-for="${input.id}"]`
            );
            if (errorEl) errorEl.textContent = "";
        };

        fields.forEach(input => {
            input.addEventListener("input", () => {
                clearError(input);
                if (successBox) successBox.hidden = true;
            });
        });

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            fields.forEach(clearError);
            if (successBox) {
                successBox.hidden = true;
            }

            let isValid = true;

            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            //Валідація імені (мінімум 3 символи)
            if (nameValue.length < 3) {
                showError(nameInput, "Імʼя повинно містити не менше 3 символи.");
                isValid = false;
            }

            //Валідація email (перевірка на @ і домен)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailValue)) {
                showError(emailInput, "Введіть коректну електронну адресу.");
                isValid = false;
            }

            //Валідація повідомлення (мінімум 10 символів)
            if (messageValue.length < 10) {
                showError(messageInput, "Повідомлення має містити не менше 10 символів.");
                isValid = false;
            }

            console.log("Форма контактів:", {
                name: nameValue,
                email: emailValue,
                message: messageValue
            });

            if (!isValid) return;

            contactForm.reset();
            if (successBox) {
                successBox.hidden = false;
                successBox.textContent = "Форма успішно надіслана!";
            }
        });
    }
});



