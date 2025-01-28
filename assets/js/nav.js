const togglerOpen = document.getElementById("toggler-open");
const togglerClose = document.getElementById("toggler-close");
const mobileDropDown = document.getElementById("mobile-dropdown");

togglerOpen.addEventListener("click", () => {
    mobileDropDown.style.display = "block";
    mobileDropDown.classList.remove("remove-animation");
    mobileDropDown.classList.add("animate-mobile");
});

togglerClose.addEventListener("click", () => {
    mobileDropDown.classList.remove("animate-mobile");
    mobileDropDown.classList.add("remove-animation");
    setTimeout(() => {
        mobileDropDown.style.display = "none";
    }, 1000)
});

// mobile links


// footer
const yearFromDocument = document.getElementById("year");
const yearNum = new Date().getFullYear();
yearFromDocument.textContent = yearNum;

// Mobile
const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const email = document.getElementById("mail");

linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/chiemezieuche/", "_blank");
});

github.addEventListener("click", () => {
    window.open("https://github.com/Chiemezie-Uchenwoke", "_blank");
});

email.addEventListener("click", () => {
    window.open("mailto:uchenwoke.chiemezie@gmail.com", "_blank");
});
