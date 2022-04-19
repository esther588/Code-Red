var radios = document.getElementsByName("radio");
var isChecked = false;
for ( var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
        var selected = radios[i].value;
        if(typeof selected == "opt-4") {
          createPie();
        }
        isChecked = true;
        break;
    }
}

function createPie() {
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
    ];

    new Chart("pieChart", {
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