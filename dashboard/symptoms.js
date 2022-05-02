var optionsArray = [];

function acneSubmit() {
    for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i].localeCompare("Whiteheads") == 0) {
            localStorage.setItem('Acne', option.value);
            alert("Your data has been submitted!");
            break;
        } else if (optionsArray[i].localeCompare("Blackheads") == 0) {
            localStorage.setItem('Acne', option.value);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Papules") == 0) {
            localStorage.setItem('Acne', option.value);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Nodules") == 0) {
            localStorage.setItem('Acne', option.value);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Cysts") == 0) {
            localStorage.setItem('Acne', option.value);
            alert("Your data has been submitted!");
            break;
        }
    }
}

function moodSubmit() {
}

function crampsSubmit() {
}

function fatigueSubmit() {
}

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

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
            if (option.value.localeCompare("Whiteheads") == 0) {
                optionsArray.push(option.value);
            } else if (option.value.localeCompare("Blackheads") == 0) {
                optionsArray.push(option.value);
            } else if (option.value.localeCompare("Papules") == 0) {
                optionsArray.push(option.value);
            } else if (option.value.localeCompare("Modules") == 0) {
                optionsArray.push(option.value);
            } else if (option.value.localeCompare("Cysts") == 0) {
                optionsArray.push(option.value);
            }
        }
    })
}

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});
