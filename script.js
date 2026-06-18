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
    nav.classList.toggle("active");
}

function toggleMenu(){
    document.getElementById("nav-menu").classList.toggle("active");
}