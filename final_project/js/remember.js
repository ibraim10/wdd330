const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form = document.querySelector(".remember-from");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const h1 = document.querySelector("h1");
const greeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

submitBtn.addEventListener("click", function () {
    localStorage.setItem("name", getName.value);

    nameDisplay();
});

forgetBtn.addEventListener("click", function () {
    localStorage.removeItem("name");

    nameDisplay();
});

function nameDisplay() {
    if (localStorage.getItem("name")) {
        let name = localStorage.getItem("name");
        h1.textContent = `Welcome ${name}!`;
        greeting.textContent = `${name}! Write the name of any Pokemon and press enter. (for example: Pikachu)`;

        forgetMe.style.display = "block";
        rememberMe.style.display = "none";
    } else {
        h1.textContent = `Welcome to Pokeland `;
        greeting.textContent = `Write the name of any Pokemon and press enter.`;

        forgetMe.style.display = "none";
        rememberMe.style.display = "block";
    }
}

document.body.onload = nameDisplay;
