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
    document.getElementById("chartContainer").innerHTML = '&nbsp;';
    document.getElementById("chartContainer").innerHTML = '<canvas id="graph" style="width:100%;max-width:600px"></canvas>';
    document.getElementById("chartContainer").innerHTML = '<canvas id="pieChart" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("graph").getContext("2d");
    var elem1 = document.getElementById("pieChart").getContext("2d");
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
    ];

    const newChart = new Chart(elem, {
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
            text: "World Wide Wine Production 2018"
            }
        }
    });
  
    const newChart1 = new Chart(elem1, {
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
        text: "World Wide Wine Production 2018"
        }
    }
    });
}

function createGraph(type) {
    document.getElementById("chartContainer").innerHTML = '&nbsp;';
    document.getElementById("chartContainer").innerHTML = '<canvas id="graph" style="width:100%;max-width:600px"></canvas>';
    var elem = document.getElementById("graph").getContext("2d");
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
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
        text: "World Wide Wine Production 2018"
        }
    }
    });
}

function errorMsg() {
    alert("You have successfully logged out.");
}