function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en]").forEach(element => {
        if (element.dataset[lang]) {
            element.textContent = element.dataset[lang];
        }
    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {

    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const header = document.querySelector("header");
    if (!header) return;

    let lastScrollTop = 0;

    function handleScroll() {
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
    }

    window.addEventListener("scroll", handleScroll);
});