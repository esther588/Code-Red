const acneButton = document.getElementById("acne-submit");
const acneForm = document.getElementById("acne-form");
const moodButton = document.getElementById("mood-submit");
const moodForm = document.getElementById("mood-form");
const crampsButton = document.getElementById("cramps-submit");
const crampsForm = document.getElementById("cramps-form");
const fatigueButton = document.getElementById("fatigue-submit");
const fatigueForm = document.getElementById("fatigue-form");

acneButton.addEventListener("click", (e) => {
    e.preventDefault();
})

moodButton.addEventListener("click", (e) => {
    e.preventDefault();
})

crampsButton.addEventListener("click", (e) => {
    e.preventDefault();
})

fatigueButton.addEventListener("click", (e) => {
    e.preventDefault();
})

let slideIndex = 1;
showSlides(slideIndex);
            
function plusSlides(n) {
    showSlides(slideIndex += n);
}
            
function currentSlide(n) {
    showSlides(slideIndex = n);
}
            
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}