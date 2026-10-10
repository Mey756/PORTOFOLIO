/* =============================== language switcher (EN / ID) ================================ */
const langToggle = document.getElementById("lang-toggle");

function toggleLanguage() {
    applyLanguage(currentLang === "en" ? "id" : "en");
}
langToggle.addEventListener("click", toggleLanguage);
langToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleLanguage();
    }
});

// terapkan bahasa saat halaman pertama dibuka (default: English)
applyLanguage(currentLang);