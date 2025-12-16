document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById("progress-bar");
    const startButton = document.getElementById("start-progress");
    const resetButton = document.getElementById("reset-progress");
    const statusText = document.getElementById("status");

    let progress = 0;
    let interval;

    startButton.addEventListener("click", function () {
        if (progress >= 100) return;

        statusText.textContent = "Uploading file...";
        startButton.disabled = true;

        interval = setInterval(function () {
            if (progress < 100) {
                progress += 5;
                progressBar.style.width = progress + "%";
            } else {
                clearInterval(interval);
                statusText.textContent = "Upload complete!";
                startButton.disabled = false;
            }
        }, 300); // Simulates upload speed
    });

    resetButton.addEventListener("click", function () {
        clearInterval(interval);
        progress = 0;
        progressBar.style.width = "0%";
        statusText.textContent = "Ready to upload";
        startButton.disabled = false;
    });
});
