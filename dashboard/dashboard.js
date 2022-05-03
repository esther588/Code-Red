var storedAcne = localStorage.getItem('Acne');
var storedMood = localStorage.getItem('Mood');
var storedCramps = localStorage.getItem('Cramps');
var storedFatigue = localStorage.getItem('Mood');

function checkType(id) {
    var typeOfGraph = "";

    if(id == "opt-1") {
        createAll();
    } else if(id == "opt-2") {
        typeOfGraph = "line";
        createGraph(typeOfGraph);
    } else if(id == "opt-3") {
        typeOfGraph = "bar";
        createGraph(typeOfGraph);
    } else if(id == "opt-4") {
        typeOfGraph = "pie";
        createGraph(typeOfGraph);
    }
}

function createAll() {
  
    html = '';

    document.getElementById("chartContainer").innerHTML = '&nbsp;';

    html += '<canvas id="lineGraph" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="barGraph" style="width:100%;max-width:600px"></canvas>';
    html += '<canvas id="pieChart" style="width:100%;max-width:600px"></canvas>';

    document.getElementById("chartContainer").innerHTML = html;

    var elem = document.getElementById("lineGraph").getContext("2d");
    var elem1 = document.getElementById("barGraph").getContext("2d");
    var elem2 = document.getElementById("pieChart").getContext("2d");

    var xValues = ["Acne", "Mood Swings", "Cramps", "Fatigue"];
    var yValues = [55, 49, 44, 24, 15];
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
    var yValues = [storedAcne, storedMood, storedCramps, storedFatigue];
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

function showSection() {
  var x = document.getElementById("graphAndChart");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}