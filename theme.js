// ==========================================
// Dark / Light Theme Toggle
// Soumyadip Thandar Website
// ==========================================
console.log("theme.js is running");
// Get saved theme
const savedTheme = localStorage.getItem("theme");

// Apply saved theme
if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}

// Toggle button
document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("theme-toggle");

    if (!button) return;

    // Set initial icon
    button.textContent =
        document.documentElement.classList.contains("dark")
        ? "☀️"
        : "🌙";

    button.addEventListener("click", () => {

        document.documentElement.classList.toggle("dark");

        const darkMode =
            document.documentElement.classList.contains("dark");

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );

        button.textContent =
            darkMode
            ? "☀️"
            : "🌙";

    });

});
