// slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
    slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 3000);
}

showSlides();


//collapsible

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        if (content.style.maxHeight && content.style.maxHeight !== "0px") {
            content.style.maxHeight = "0px";
            content.style.padding = "0 15px";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "15px";
        }
    });
}

