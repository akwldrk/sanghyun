/* ======================================
   KSH Mobility & Wellness
   script.js
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =============================
       Navbar Scroll Effect
    ============================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(8,27,24,.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

        } else {

            navbar.style.background = "rgba(8,27,24,.75)";
            navbar.style.boxShadow = "none";

        }

    });

});

/* =============================
   Counter Animation
============================= */

const counters = document.querySelectorAll(".counter");

const speed = 120;

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const update = () => {

        const increment = Math.ceil(target / speed);

        current += increment;

        if (current >= target) {

            counter.textContent = target + "+";

        } else {

            counter.textContent = current;

            requestAnimationFrame(update);

        }

    };

    update();

};

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter(entry.target);

            observer.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => observer.observe(counter));

/* =============================
   Fade In Animation
============================= */

const fadeElements = document.querySelectorAll(
    ".about, .service-card, .timeline-item, .contact-card"
);

fadeElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .8s ease";

});

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold:0.2

});

fadeElements.forEach(el => fadeObserver.observe(el));

/* =============================
   Smooth Active Menu
============================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

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

/* =============================
   Back To Top Button
============================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
