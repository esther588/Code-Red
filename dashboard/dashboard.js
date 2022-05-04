var graphsArray = ["acneGraphs", "moodGraphs", "crampsGraphs", "fatigueGraphs"];
var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var yValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var barColors = [
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
var title = "Period Symptoms";

feather.replace();

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
            backgroundColor: barColors,
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

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
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
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
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

function acneCreateGraph(type) {
    document.getElementById("acneContainer").innerHTML = '&nbsp;';
    document.getElementById("acneContainer").innerHTML = '<canvas id="createAcne" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createAcne").getContext("2d");
    var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var yValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
    ];
  
    createGraph(elem, type);
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

    var xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var yValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
    ];
    var title = "Period Symptoms";

    const newChart = new Chart(elem, {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
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

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
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
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
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

function moodCreateGraph(type) {
    document.getElementById("moodContainer").innerHTML = '&nbsp;';
    document.getElementById("moodContainer").innerHTML = '<canvas id="createMood" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createMood").getContext("2d");
  
    createGraph(elem, type);
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
            backgroundColor: barColors,
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

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
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
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
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

function crampsCreateGraph(type) {
    document.getElementById("crampsContainer").innerHTML = '&nbsp;';
    document.getElementById("crampsContainer").innerHTML = '<canvas id="createCramps" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createCramps").getContext("2d");
  
    createGraph(elem, type);
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
            backgroundColor: barColors,
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

    const newChart1 = new Chart(elem1, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
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
  
    const newChart2 = new Chart(elem2, {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
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

function fatigueCreateGraph(type) {
    document.getElementById("fatigueContainer").innerHTML = '&nbsp;';
    document.getElementById("fatigueContainer").innerHTML = '<canvas id="createFatigue" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("createFatigue").getContext("2d");
  
    createGraph(elem, type);
}

function createGraph(elem, type) {
    const newChart = new Chart(elem, {
        type: type,
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
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