var graphsArray = ["acneGraphs", "moodGraphs", "crampsGraphs", "fatigueGraphs"];

feather.replace();

// Functions for acne graphs

function checkAcne(id) {
    var typeOfGraph = "";

    if(id == "acne-2") {
        typeOfGraph = "line";
        createGraph(typeOfGraph);
    } else if(id == "acne-3") {
        typeOfGraph = "bar";
        createGraph(typeOfGraph);
    } else if(id == "acne-4") {
        typeOfGraph = "pie";
        createGraph(typeOfGraph);
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

// Functions for mood graphs

function checkMood(id) {
    var typeOfGraph = "";

    if(id == "mood-2") {
        typeOfGraph = "line";
        createGraph(typeOfGraph);
    } else if(id == "mood-3") {
        typeOfGraph = "bar";
        createGraph(typeOfGraph);
    } else if(id == "mood-4") {
        typeOfGraph = "pie";
        createGraph(typeOfGraph);
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

// Functions for cramps graphs

function checkCramps(id) {
    var typeOfGraph = "";

    if(id == "cramps-2") {
        typeOfGraph = "line";
        createGraph(typeOfGraph);
    } else if(id == "cramps-3") {
        typeOfGraph = "bar";
        createGraph(typeOfGraph);
    } else if(id == "cramps-4") {
        typeOfGraph = "pie";
        createGraph(typeOfGraph);
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

// Functions for fatigue graphs

function checkFatigue(id) {
    var typeOfGraph = "";

    if(id == "fatigue-2") {
        typeOfGraph = "line";
        createGraph(typeOfGraph);
    } else if(id == "fatigue-3") {
        typeOfGraph = "bar";
        createGraph(typeOfGraph);
    } else if(id == "fatigue-4") {
        typeOfGraph = "pie";
        createGraph(typeOfGraph);
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

function createGraph(type) {
    document.getElementById("chartContainer").innerHTML = '&nbsp;';
    document.getElementById("chartContainer").innerHTML = '<canvas id="graph" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("graph").getContext("2d");
    var xValues = ["Acne", "Mood Swings", "Cramps", "Fatigue"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
    ];
  
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
        text: "Period Symptoms"
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