feather.replace();

var graphsArray = ["acneGraphs", "moodGraphs", "crampsGraphs", "fatigueGraphs"];
var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var acneColors = [
    "#8E3200",
    "#A64B2A",
    "#D7A86E",
    "#FFEBC1",
    "#8E3200",
    "#A64B2A",
    "#D7A86E",
    "#FFEBC1",
    "#8E3200",
    "#A64B2A",
    "#D7A86E",
    "#FFEBC1"
];
var moodColors = [
    "#4E944F",
    "#83BD75",
    "#B4E197",
    "#E9EFC0",
    "#4E944F",
    "#83BD75",
    "#B4E197",
    "#E9EFC0",
    "#4E944F",
    "#83BD75",
    "#B4E197",
    "#E9EFC0"
];
var crampsColors = [
    "#1A3C40",
    "#1D5C63",
    "#417D7A",
    "#EDE6DB",
    "#1A3C40",
    "#1D5C63",
    "#417D7A",
    "#EDE6DB",
    "#1A3C40",
    "#1D5C63",
    "#417D7A",
    "#EDE6DB"
];
var fatigueColors = [
        "#E9D5DA",
        "#827397",
        "#4D4C7D",
        "#363062",
        "#E9D5DA",
        "#827397",
        "#4D4C7D",
        "#363062",
        "#E9D5DA",
        "#827397",
        "#4D4C7D",
        "#363062"
];
var acneTitle = "Acne Flare-Ups";
var moodTitle = "Mood Swings";
var crampsTitle = "Intensity of Cramps";
var fatigueTitle = "Fatigueness";

function logOutMsg() {
    alert("You have successfully logged out.");
}

function showSection(id) {
    for (let i = 0; i < graphsArray.length; i++) {
        var elem = document.getElementById(graphsArray[i]);
        if (elem.style.display === "block") {
            elem.style.display = "none";
        }
    }
    var curr = document.getElementById(id);
    if (curr.style.display === "none") {
        curr.style.display = "block";
    } else {
        curr.style.display = "none";
    }
}

function changeFlags() {
    const strFlags = localStorage.getItem("flagsArr");
    var flagsArr = JSON.parse(strFlags);
    flagsArr[0] = false;
    flagsArr[1] = false;
    flagsArr[2] = false;
    flagsArr[3] = false;
    const jsonArr = JSON.stringify(flagsArr);
    localStorage.setItem("flagsArr", jsonArr);
}

const strAcne = localStorage.getItem("acneCounter");
var acneValues = JSON.parse(strAcne);
const strMood = localStorage.getItem("moodCounter");
var moodValues = JSON.parse(strMood);
const strCramps = localStorage.getItem("crampsCounter");
var crampsValues = JSON.parse(strCramps);
const strFatigue = localStorage.getItem("fatigueCounter");
var fatigueValues = JSON.parse(strFatigue);

// Functions for acne graphs

function checkAcne(id) {
    var typeOfGraph = "";

    if(id == "acne-2") {
        typeOfGraph = "line";
        acneCreateGraph(typeOfGraph);
    } else if(id == "acne-3") {
        typeOfGraph = "bar";
        acneCreateGraph(typeOfGraph);
    } else if(id == "acne-4") {
        typeOfGraph = "pie";
        acneCreateGraph(typeOfGraph);
    }
}

function acneCreateAll() {
  
    html = '';

    document.getElementById("acneContainer").innerHTML = '&nbsp;';

    html += '<canvas id="acneLine" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="acneBar" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="acnePie" style="width:100%;max-width:600px"></canvas>';

    document.getElementById("acneContainer").innerHTML = html;

    var elem = document.getElementById("acneLine").getContext("2d");
    var elem1 = document.getElementById("acneBar").getContext("2d");
    var elem2 = document.getElementById("acnePie").getContext("2d");

    const newChart = new Chart(elem, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: acneColors,
            data: acneValues
            }]
        },
        options: {
            title: {
            display: true,
            text: acneTitle
            }
        }
    });

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: acneColors,
            data: acneValues
            }]
        },
        options: {
            title: {
            display: true,
            text: acneTitle
            }
        }
    });
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: acneColors,
        data: acneValues
        }]
    },
    options: {
        title: {
        display: true,
        text: acneTitle
        }
    }
    });
}

function acneCreateGraph(type) {
    document.getElementById("acneContainer").innerHTML = '&nbsp;';
    document.getElementById("acneContainer").innerHTML = '<canvas id="createAcne" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createAcne").getContext("2d");
  
    createGraph(elem, type, acneTitle, acneColors, acneValues);
}

// Functions for mood graphs

function checkMood(id) {
    var typeOfGraph = "";

    if(id == "mood-2") {
        typeOfGraph = "line";
        moodCreateGraph(typeOfGraph);
    } else if(id == "mood-3") {
        typeOfGraph = "bar";
        moodCreateGraph(typeOfGraph);
    } else if(id == "mood-4") {
        typeOfGraph = "pie";
        moodCreateGraph(typeOfGraph);
    }
}

function moodCreateAll() {
  
    html = '';

    document.getElementById("moodContainer").innerHTML = '&nbsp;';

    html += '<canvas id="moodLine" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="moodBar" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="moodPie" style="width:100%;max-width:600px"></canvas>';

    document.getElementById("moodContainer").innerHTML = html;

    var elem = document.getElementById("moodLine").getContext("2d");
    var elem1 = document.getElementById("moodBar").getContext("2d");
    var elem2 = document.getElementById("moodPie").getContext("2d");

    const newChart = new Chart(elem, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: moodColors,
            data: moodValues
            }]
        },
        options: {
            title: {
            display: true,
            text: moodTitle
            }
        }
    });

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: moodColors,
            data: moodValues
            }]
        },
        options: {
            title: {
            display: true,
            text: moodTitle
            }
        }
    });
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: moodColors,
        data: moodValues
        }]
    },
    options: {
        title: {
        display: true,
        text: moodTitle
        }
    }
    });
}

function moodCreateGraph(type) {
    document.getElementById("moodContainer").innerHTML = '&nbsp;';
    document.getElementById("moodContainer").innerHTML = '<canvas id="createMood" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createMood").getContext("2d");
  
    createGraph(elem, type, moodTitle, moodColors, moodValues);
}

// Functions for cramps graphs

function checkCramps(id) {
    var typeOfGraph = "";

    if(id == "cramps-2") {
        typeOfGraph = "line";
        crampsCreateGraph(typeOfGraph);
    } else if(id == "cramps-3") {
        typeOfGraph = "bar";
        crampsCreateGraph(typeOfGraph);
    } else if(id == "cramps-4") {
        typeOfGraph = "pie";
        crampsCreateGraph(typeOfGraph);
    }
}

function crampsCreateAll() {
  
    html = '';

    document.getElementById("crampsContainer").innerHTML = '&nbsp;';

    html += '<canvas id="crampsLine" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="crampsBar" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="crampsPie" style="width:100%;max-width:600px"></canvas>';

    document.getElementById("crampsContainer").innerHTML = html;

    var elem = document.getElementById("crampsLine").getContext("2d");
    var elem1 = document.getElementById("crampsBar").getContext("2d");
    var elem2 = document.getElementById("crampsPie").getContext("2d");

    const newChart = new Chart(elem, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: crampsColors,
            data: crampsValues
            }]
        },
        options: {
            title: {
            display: true,
            text: crampsTitle
            }
        }
    });

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: crampsColors,
            data: crampsValues
            }]
        },
        options: {
            title: {
            display: true,
            text: crampsTitle
            }
        }
    });
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: crampsColors,
        data: crampsValues
        }]
    },
    options: {
        title: {
        display: true,
        text: crampsTitle
        }
    }
    });
}

function crampsCreateGraph(type) {
    document.getElementById("crampsContainer").innerHTML = '&nbsp;';
    document.getElementById("crampsContainer").innerHTML = '<canvas id="createCramps" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createCramps").getContext("2d");
  
    createGraph(elem, type, crampsTitle, crampsColors, crampsValues);
}

// Functions for fatigue graphs

function checkFatigue(id) {
    var typeOfGraph = "";

    if(id == "fatigue-2") {
        typeOfGraph = "line";
        fatigueCreateGraph(typeOfGraph);
    } else if(id == "fatigue-3") {
        typeOfGraph = "bar";
        fatigueCreateGraph(typeOfGraph);
    } else if(id == "fatigue-4") {
        typeOfGraph = "pie";
        fatigueCreateGraph(typeOfGraph);
    }
}

function fatigueCreateAll() {
  
    html = '';

    document.getElementById("fatigueContainer").innerHTML = '&nbsp;';

    html += '<canvas id="fatigueLine" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="fatigueBar" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="fatiguePie" style="width:100%;max-width:600px"></canvas>';

    document.getElementById("fatigueContainer").innerHTML = html;

    var elem = document.getElementById("fatigueLine").getContext("2d");
    var elem1 = document.getElementById("fatigueBar").getContext("2d");
    var elem2 = document.getElementById("fatiguePie").getContext("2d");

    const newChart = new Chart(elem, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: fatigueColors,
            data: fatigueValues
            }]
        },
        options: {
            title: {
            display: true,
            text: fatigueTitle
            }
        }
    });

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: fatigueColors,
            data: fatigueValues
            }]
        },
        options: {
            title: {
            display: true,
            text: fatigueTitle
            }
        }
    });
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: fatigueColors,
        data: fatigueValues
        }]
    },
    options: {
        title: {
        display: true,
        text: fatigueTitle
        }
    }
    });
}

function fatigueCreateGraph(type) {
    document.getElementById("fatigueContainer").innerHTML = '&nbsp;';
    document.getElementById("fatigueContainer").innerHTML = '<canvas id="createFatigue" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createFatigue").getContext("2d");
  
    createGraph(elem, type, fatigueTitle, fatigueColors, fatigueValues);
}

function createGraph(elem, type, title, colors, yValues) {
    const newChart = new Chart(elem, {
        type: type,
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: colors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: true,
            text: title
            }
        }
        });
}

showNotes();

// Display all notes
function showNotes() {
    let notes = localStorage.getItem("notes");
  
    if (notes == null) {
        notesArr = [];
    } else {
        notesArr = JSON.parse(notes);
    }
  
    let html = "";

    var counter = 1;
  
    notesArr.forEach(function(element, index) {
        if(counter == 1) {
            html += '<div class="task-box yellow"><div class="description-task"><div class="task-name">' + element + '</div></div><div class="more-button"></div></div>';
            counter++;
        } else if(counter == 2) {
            html += '<div class="task-box blue"><div class="description-task"><div class="task-name">' + element + '</div></div><div class="more-button"></div></div>';
            counter++;
        } else if (counter == 3){
            html += '<div class="task-box red"><div class="description-task"><div class="task-name">Team Meeting</div></div><div class="more-button"></div></div>';
            counter++;
        } else {
            html += '<div class="task-box green"><div class="description-task"><div class="task-name">' + element + '</div></div><div class="more-button"></div></div>';
            counter = 1;
        }
    });
  
    let notesElm = document.getElementById("notes-section");
  
    if (notesArr.length != 0) {
        notesElm.innerHTML = html;
    }
}