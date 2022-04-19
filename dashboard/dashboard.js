var radios = document.getElementsByName("radio");
var isChecked = false;
for ( var i = 0; i < radios.length; i++) {
    if(radios[i].checked) {
        var selected = radios[i].value;
        if(typeof selected == "opt-1") {
            createPie();
        } else if(typeof selected == "opt-2") {
            createPie();
        } else if(typeof selected == "opt-3") {
            createBar();
        } else if(typeof selected == "opt-4") {
            createPie();
        }
        isChecked = true;
        break;
    }
}

function createBar() {
    const labels = Utils.months({count: 7});
    const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    };
    new Chart("barGraph", {
        type: 'bar',
        data: data,
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        },
    });
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