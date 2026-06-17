function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-en]").forEach(el => {
        if (el.dataset[lang]) {
            el.textContent = el.dataset[lang];
        }
    });

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {

    // ===== Language =====
    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    // ===== Header Hide on Scroll =====
    const header = document.querySelector("header");

    if (!header) return;

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const isMobile = window.innerWidth <= 1024;

        if (!isMobile) {
            header.classList.remove("hide");
            return;
        }

        if (scrollTop <= 0) {
            header.classList.remove("hide");
        } else if (scrollTop > lastScrollTop) {
            header.classList.add("hide"); // เลื่อนลง = ซ่อน
        } else {
            header.classList.remove("hide"); // เลื่อนขึ้น = แสดง
        }

        lastScrollTop = scrollTop;
    });

});