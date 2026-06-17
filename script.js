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
    const savedLanguage =
        localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);
});


// ซ่อนเมนูเฉพาะมือถือและ iPad
if (window.innerWidth <= 1024) {

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= 0) {
            // อยู่บนสุดของหน้า แสดงเมนู
            header.classList.remove("hide");
        } else {
            // เลื่อนลง ซ่อนเมนู
            header.classList.add("hide");
        }

    });

}

/* Header Show / Hide for Mobile & iPad */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        // ทำงานเฉพาะมือถือและ iPad
        if (window.innerWidth <= 1024) {

            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop <= 0) {
                // อยู่บนสุดของหน้า → แสดงเมนู
                header.classList.remove("hide");
            } else {
                // เลื่อนลง → ซ่อนเมนู
                header.classList.add("hide");
            }

        } else {
            // คอมพิวเตอร์ → แสดงเมนูตลอด
            header.classList.remove("hide");
        }

    });

});