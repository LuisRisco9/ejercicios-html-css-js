const button = document.getElementById("themeToggle");

button.addEventListener("click", function () {
    // Toggle dark mode on body
    document.body.classList.toggle('dark-mode');
});
