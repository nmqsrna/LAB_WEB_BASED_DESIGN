const form = document.getElementById("signupForm");
        const progressContainer = document.getElementById("progressContainer");
        const progressBar = document.getElementById("progressBar");

        form.addEventListener("submit", function(e) {
            e.preventDefault(); // stop normal submit

            // hide form, show progress bar
            form.style.display = "none";
            progressContainer.style.display = "block";

            let progress = 0;
            const interval = setInterval(() => {
                progress += 5;
                progressBar.style.width = progress + "%";

                if (progress >= 100) {
                    clearInterval(interval);
                    // redirect to next page
                    window.location.href = "index01.html";
                }
            }, 150);
        });