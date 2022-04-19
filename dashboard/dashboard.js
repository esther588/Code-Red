const elem = document.getElementById("graph");
const elem1 = document.getElementById("barGraph");
const elem2 = document.getElementById("pieChart");
    
function createGraph(id) {
    var typeOfGraph = "";

    if(id == "opt-1") {
        
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

function createGraph(typeOfGraph) {
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
    type: typeOfGraph,
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