document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        const symbol = this.querySelector('.toggle-symbol');

        // Mostrar Respuesta
        if (answer.style.display === "block") {
            answer.style.display = "none";
            symbol.textContent = ">";
        } else {
            answer.style.display = "block";
            symbol.textContent = "∨";
        }
    });
});