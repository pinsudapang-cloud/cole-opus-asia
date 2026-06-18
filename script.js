console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", function () {

    const savedLanguage =
        localStorage.getItem("language") || "en";

    setLanguage(savedLanguage);

    const header = document.querySelector("header");

    if (!header) return;

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const isMobile = window.innerWidth <= 1024;

        if (!isMobile) {
            header.classList.remove("hide");
            return;
        }

        if (scrollTop <= 0) {
            header.classList.remove("hide");
        } else if (scrollTop > lastScrollTop) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScrollTop = scrollTop;
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector("header");

    if (!header) return;

    let lastScrollTop = 0;

    window.addEventListener("scroll", function () {

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        const isMobile = window.innerWidth <= 1024;

        if (!isMobile) {
            header.classList.remove("hide");
            return;
        }

        if (scrollTop <= 0) {
            header.classList.remove("hide");
        } else if (scrollTop > lastScrollTop) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScrollTop = scrollTop;
    });

});

function toggleMenu() {
    const nav = document.getElementById("nav-menu");
    if (nav) {
        nav.classList.toggle("active");
    }
}

function setLanguage(lang) {

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en]").forEach(element => {

        if (element.dataset[lang]) {
            element.textContent = element.dataset[lang];
        }

    });

    localStorage.setItem("language", lang);

    /* ปิด hamburger menu หลังเปลี่ยนภาษา */
    const nav = document.getElementById("nav-menu");

    if (nav) {
        nav.classList.remove("active");
    }
}