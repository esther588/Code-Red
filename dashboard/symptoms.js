var optionsArray = [];
var monthOption = "";

function acneSubmit() {
    for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i].localeCompare("Whiteheads") == 0) {
            var counter = localStorage.getItem('Acne' + monthOption);
            if(counter == "") {
                localStorage.setItem('Acne' + monthOption, 1);
            } else {
                localStorage.setItem('Acne' + monthOption, counter++);
            }
            alert("Your data has been submitted!");
            break;
        } else if (optionsArray[i].localeCompare("Blackheads") == 0) {
            if(counter == "") {
                localStorage.setItem('Acne' + monthOption, 1);
            } else {
                localStorage.setItem('Acne' + monthOption, counter++);
            }
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Papules") == 0) {
            if(counter == "") {
                localStorage.setItem('Acne' + monthOption, 1);
            } else {
                localStorage.setItem('Acne' + monthOption, counter++);
            }
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Nodules") == 0) {
            if(counter == "") {
                localStorage.setItem('Acne' + monthOption, 1);
            } else {
                localStorage.setItem('Acne' + monthOption, counter++);
            }
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Cysts") == 0) {
            if(counter == "") {
                localStorage.setItem('Acne' + monthOption, 1);
            } else {
                localStorage.setItem('Acne' + monthOption, counter++);
            }
            alert("Your data has been submitted!");
            break;
        }
    }
}

function moodSubmit() {
    for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i].localeCompare("Irritability") == 0) {
            localStorage.setItem('Mood', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        } else if (optionsArray[i].localeCompare("Anger") == 0) {
            localStorage.setItem('Mood', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Sadness") == 0) {
            localStorage.setItem('Mood', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Anxiety") == 0) {
            localStorage.setItem('Mood', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }
    }
}

function crampsSubmit() {
    for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i].localeCompare("None") == 0) {
            localStorage.setItem('Cramps', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        } else if (optionsArray[i].localeCompare("Minimal") == 0) {
            localStorage.setItem('Cramps', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Moderate") == 0) {
            localStorage.setItem('Cramps', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Extreme") == 0) {
            localStorage.setItem('Cramps', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }
    }
}

function fatigueSubmit() {
    for (let i = 0; i < optionsArray.length; i++) {
        if (optionsArray[i].localeCompare("Social") == 0) {
            localStorage.setItem('Fatigue', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        } else if (optionsArray[i].localeCompare("Emotional") == 0) {
            localStorage.setItem('Fatigue', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Physical") == 0) {
            localStorage.setItem('Fatigue', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }  else if (optionsArray[i].localeCompare("Pain") == 0) {
            localStorage.setItem('Fatigue', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        } else if (optionsArray[i].localeCompare("Mental") == 0) {
            localStorage.setItem('Fatigue', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        } else if (optionsArray[i].localeCompare("Chronic") == 0) {
            localStorage.setItem('Fatigue', optionsArray[i]);
            alert("Your data has been submitted!");
            break;
        }
    }
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
            if (this.textContent.localeCompare("Whiteheads") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Blackheads") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Papules") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Nodules") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Cysts") == 0) {
                optionsArray.push(this.textContent);
            }

            if (this.textContent.localeCompare("Irritability") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Anger") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Sadness") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Anxiety") == 0) {
                optionsArray.push(this.textContent);
            }

            if (this.textContent.localeCompare("None") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Minimal") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Moderate") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Extreme") == 0) {
                optionsArray.push(this.textContent);
            }

            if (this.textContent.localeCompare("Social") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Emotional") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Physical") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Pain") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Mental") == 0) {
                optionsArray.push(this.textContent);
            } else if (this.textContent.localeCompare("Chronic") == 0) {
                optionsArray.push(this.textContent);
            }

            if (this.textContent.localeCompare("January") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("February") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("March") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("April") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("May") == 0) {
                monthOption = this.textContent;
            }  else if (this.textContent.localeCompare("June") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("July") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("August") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("September") == 0) {
                monthOption = this.textContent;
            }  else if (this.textContent.localeCompare("October") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("November") == 0) {
                monthOption = this.textContent;
            } else if (this.textContent.localeCompare("December") == 0) {
                monthOption = this.textContent;
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
