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
