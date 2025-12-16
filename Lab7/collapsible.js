document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".collapsible");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("active");

            const content = button.nextElementSibling;
            content.classList.toggle("show");
        });
    });
});
