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