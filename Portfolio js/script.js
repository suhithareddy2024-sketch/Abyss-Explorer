// ==============================
// Contact Form Validation
// ==============================

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

// Email Validation Pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form Submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    clearErrors();

    let valid = true;

    // ======================
    // Name Validation
    // ======================

    if (nameInput.value.trim() === "") {

        nameError.innerHTML = "Name cannot be empty";

        setInvalid(nameInput);

        valid = false;

    } else {

        setValid(nameInput);

    }

    // ======================
    // Email Validation
    // ======================

    if (!emailPattern.test(emailInput.value.trim())) {

        emailError.innerHTML = "Please enter a valid email address";

        setInvalid(emailInput);

        valid = false;

    } else {

        setValid(emailInput);

    }

    // ======================
    // Subject Validation
    // ======================

    if (subjectInput.value.trim().length < 5) {

        subjectError.innerHTML = "Subject should contain at least 5 characters";

        setInvalid(subjectInput);

        valid = false;

    } else {

        setValid(subjectInput);

    }

    // ======================
    // Message Validation
    // ======================

    if (messageInput.value.trim().length < 20) {

        messageError.innerHTML = "Message should contain at least 20 characters";

        setInvalid(messageInput);

        valid = false;

    } else {

        setValid(messageInput);

    }

    // ======================
    // Success
    // ======================

    if (valid) {

        alert("✅ Message Sent Successfully!");

        form.reset();

        removeBorders();

    }

});

// ==============================
// Helper Functions
// ==============================

function clearErrors() {

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    subjectError.innerHTML = "";
    messageError.innerHTML = "";

}

function setInvalid(element) {

    element.style.border = "2px solid red";

}

function setValid(element) {

    element.style.border = "2px solid green";

}

function removeBorders() {

    nameInput.style.border = "none";
    emailInput.style.border = "none";
    subjectInput.style.border = "none";
    messageInput.style.border = "none";

}

// ==============================
// Smooth Scrolling
// ==============================

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ==============================
// Active Navigation
// ==============================

window.addEventListener("scroll", () => {

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("nav ul li a");

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Progress Bar Animation
// ==============================

const progressBars = document.querySelectorAll(".progress div");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.innerHTML;

            entry.target.style.width = "0";

            setTimeout(() => {

                entry.target.style.transition = "1.5s";

                entry.target.style.width = width;

            }, 200);

        }

    });

});

progressBars.forEach(bar => {

    observer.observe(bar);

});

// ==============================
// Fade Animation on Scroll
// ==============================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .education-card, .experience-card, .internship-card, .achievement-card"
);

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 1s";

    fadeObserver.observe(card);

});

// ==============================
// Typing Effect
// ==============================

const title = document.querySelector(".hero-text h2");

const text = "Web Developer | AI Enthusiast | Student";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 60);

    }

}

title.innerHTML = "";

typeWriter();