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

var optionsMap = new Map();
var monthIndex = 0;

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
                optionsMap.set("Acne", this.textContent);
            } else if (this.textContent.localeCompare("Blackheads") == 0) {
                optionsMap.set("Acne", this.textContent);
            } else if (this.textContent.localeCompare("Papules") == 0) {
                optionsMap.set("Acne", this.textContent);
            } else if (this.textContent.localeCompare("Nodules") == 0) {
                optionsMap.set("Acne", this.textContent);
            } else if (this.textContent.localeCompare("Cysts") == 0) {
                optionsMap.set("Acne", this.textContent);
            }

            if (this.textContent.localeCompare("Irritability") == 0) {
                optionsMap.set("Mood", this.textContent);
            } else if (this.textContent.localeCompare("Anger") == 0) {
                optionsMap.set("Mood", this.textContent);
            } else if (this.textContent.localeCompare("Sadness") == 0) {
                optionsMap.set("Mood", this.textContent);
            } else if (this.textContent.localeCompare("Anxiety") == 0) {
                optionsMap.set("Mood", this.textContent);
            }

            if (this.textContent.localeCompare("None") == 0) {
                optionsMap.set("Cramps", this.textContent);
            } else if (this.textContent.localeCompare("Minimal") == 0) {
                optionsMap.set("Cramps", this.textContent);
            } else if (this.textContent.localeCompare("Moderate") == 0) {
                optionsMap.set("Cramps", this.textContent);
            } else if (this.textContent.localeCompare("Extreme") == 0) {
                optionsMap.set("Cramps", this.textContent);
            }

            if (this.textContent.localeCompare("Social") == 0) {
                optionsMap.set("Fatigue", this.textContent);
            } else if (this.textContent.localeCompare("Emotional") == 0) {
                optionsMap.set("Fatigue", this.textContent);
            } else if (this.textContent.localeCompare("Physical") == 0) {
                optionsMap.set("Fatigue", this.textContent);
            } else if (this.textContent.localeCompare("Pain") == 0) {
                optionsMap.set("Fatigue", this.textContent);
            } else if (this.textContent.localeCompare("Mental") == 0) {
                optionsMap.set("Fatigue", this.textContent);
            } else if (this.textContent.localeCompare("Chronic") == 0) {
                optionsMap.set("Fatigue", this.textContent);
            }

            if (this.textContent.localeCompare("January") == 0) {
                monthIndex = 0;
            } else if (this.textContent.localeCompare("February") == 0) {
                monthOption = 1;
            } else if (this.textContent.localeCompare("March") == 0) {
                monthIndex = 2;
            } else if (this.textContent.localeCompare("April") == 0) {
                monthIndex = 3;
            } else if (this.textContent.localeCompare("May") == 0) {
                monthIndex = 4;
            }  else if (this.textContent.localeCompare("June") == 0) {
                monthIndex = 5;
            } else if (this.textContent.localeCompare("July") == 0) {
                monthIndex = 6;
            } else if (this.textContent.localeCompare("August") == 0) {
                monthIndex = 7;
            } else if (this.textContent.localeCompare("September") == 0) {
                monthIndex = 8;
            }  else if (this.textContent.localeCompare("October") == 0) {
                monthIndex = 9;
            } else if (this.textContent.localeCompare("November") == 0) {
                monthIndex = 10;
            } else if (this.textContent.localeCompare("December") == 0) {
                monthIndex = 11;
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

const strFlags = localStorage.getItem("flagsArr");
var flagsArr = JSON.parse(strFlags);

var acneFlag = flagsArr[0];
var moodFlag = flagsArr[1];
var crampsFlag = flagsArr[2];
var fatigueFlag = flagsArr[3];

function acneSubmit() {
    const strAcne = localStorage.getItem("acneCounter");
    var acneCounter = JSON.parse(strAcne);
    var acneOption = optionsMap.get("Acne");
    if (acneOption.localeCompare("Whiteheads") == 0) {
        acneCounter[monthIndex] += 1;
    } else if (acneOption.localeCompare("Blackheads") == 0) {
        acneCounter[monthIndex] += 1;
    }  else if (acneOption.localeCompare("Papules") == 0) {
        acneCounter[monthIndex] += 1;
    }  else if (acneOption.localeCompare("Nodules") == 0) {
        acneCounter[monthIndex] += 1;
    }  else if (acneOption.localeCompare("Cysts") == 0) {
        acneCounter[monthIndex] += 1;
    }
    const jsonArr = JSON.stringify(acneCounter);
    localStorage.setItem("acneCounter", jsonArr);
    acneFlag = true;
    alert("Your data has been submitted!");
    checkSubmit();
}

function moodSubmit() {
    const strMood = localStorage.getItem("moodCounter");
    var moodCounter = JSON.parse(strMood);
    var moodOption = optionsMap.get("Mood");
    if (moodOption.localeCompare("Irritability") == 0) {
        moodCounter[monthIndex] += 1;
    } else if (moodOption.localeCompare("Anger") == 0) {
        moodCounter[monthIndex] += 1;
    }  else if (moodOption.localeCompare("Sadness") == 0) {
        moodCounter[monthIndex] += 1;
    }  else if (moodOption.localeCompare("Anxiety") == 0) {
        moodCounter[monthIndex] += 1;
    }
    const jsonArr = JSON.stringify(moodCounter);
    localStorage.setItem("moodCounter", jsonArr);
    moodFlag = true;
    alert("Your data has been submitted!");
    checkSubmit();
}

function crampsSubmit() {
    const strCramps = localStorage.getItem("crampsCounter");
    var crampsCounter = JSON.parse(strCramps);
    var crampsOption = optionsMap.get("Cramps");
    if (crampsOption.localeCompare("None") == 0) {
        crampsCounter[monthIndex] += 1;
    } else if (crampsOption.localeCompare("Minimal") == 0) {
        crampsCounter[monthIndex] += 1;
    }  else if (crampsOption.localeCompare("Moderate") == 0) {
        crampsCounter[monthIndex] += 1;
    }  else if (crampsOption.localeCompare("Extreme") == 0) {
        crampsCounter[monthIndex] += 1;
    }
    const jsonArr = JSON.stringify(crampsCounter);
    localStorage.setItem("crampsCounter", jsonArr);
    crampsFlag = true;
    alert("Your data has been submitted!");
    checkSubmit();
}

function fatigueSubmit() {
    const strFatigue = localStorage.getItem("fatigueCounter");
    var fatigueCounter = JSON.parse(strFatigue);
    var fatigueOption = optionsMap.get("Fatigue");
    if (fatigueOption.localeCompare("Social") == 0) {
        fatigueCounter[monthIndex] += 1;
    } else if (fatigueOption.localeCompare("Emotional") == 0) {
        fatigueCounter[monthIndex] += 1;
    }  else if (fatigueOption.localeCompare("Physical") == 0) {
        fatigueCounter[monthIndex] += 1;
    }  else if (fatigueOption.localeCompare("Pain") == 0) {
        fatigueCounter[monthIndex] += 1;
    }  else if (fatigueOption.localeCompare("Mental") == 0) {
        fatigueCounter[monthIndex] += 1;
    } else if (fatigueOption.localeCompare("Chronic") == 0) {
        fatigueCounter[monthIndex] += 1;
    }
    const jsonArr = JSON.stringify(fatigueCounter);
    localStorage.setItem("fatigueCounter", jsonArr);
    fatigueFlag = true;
    alert("Your data has been submitted!");
    checkSubmit();
}

function checkSubmit() {
    if(acneFlag == true && moodFlag == true && crampsFlag == true && fatigueFlag == true) {
        flagsArr[0] = true;
        flagsArr[1] = true;
        flagsArr[2] = true;
        flagsArr[3] = true;
        const jsonArr = JSON.stringify(flagsArr);
        localStorage.setItem("flagsArr", jsonArr);
        location.assign("https://esther588.github.io/Code-Red/dashboard/dashboard.html");
    }
}