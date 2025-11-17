document.addEventListener("DOMContentLoaded", function() {

  const burger = document.getElementById("burgerBtn");
  const nav = document.getElementById("mainNav").querySelector("ul");

  burger.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

});

//Перевірка повторного пароля при реєстрації
document.addEventListener("DOMContentLoaded", () => {
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
}