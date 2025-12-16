/* --- 4. Automatic Slideshow Logic --- */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  // Reset to first slide if at the end
  if (slideIndex > slides.length) {
      slideIndex = 1
  }    
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";  
  
  // Change image every 3 seconds (3000ms)
  setTimeout(showSlides, 3000); 
}

/* --- 7. Collapsible Section Logic --- */
const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // Toggle the "active" class to highlight the button
    this.classList.toggle("active");
    
    // Select the content div immediately following the button
    const content = this.nextElementSibling;
    
    // Toggle display between block and none
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}