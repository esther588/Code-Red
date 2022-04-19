function createAll() {
    createLine();
    var xValues1 = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues1 = [55, 49, 44, 24, 15];
    var barColors1 = ["red", "green","blue","orange","brown"];
        
    new Chart("barGraph", {
    type: "bar",
    data: {
        labels: xValues1,
        datasets: [{
            backgroundColor: barColors1,
            data: yValues1
        }]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: "World Wine Production 2018"
        }
    }
    });

    var xValues2 = ["Italy", "France", "Spain", "USA", "Argentina"];
        var yValues2 = [55, 49, 44, 24, 15];
        var barColors2 = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
        ];
    
        new Chart("pieChart", {
        type: "pie",
        data: {
            labels: xValues2,
            datasets: [{
            backgroundColor: barColors2,
            data: yValues2
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
  
  function createLine() {
      var xValues = [100,200,300,400,500,600,700,800,900,1000];
    
      new Chart("graph", {
          type: "line",
          data: {
          labels: xValues,
          datasets: [{ 
              data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
              borderColor: "red",
              fill: false
          }, { 
              data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
              borderColor: "green",
              fill: false
          }, { 
              data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
              borderColor: "blue",
              fill: false
          }]
          },
          options: {
          legend: {display: false}
          }
      });
    }
  
    function createBar() {
        var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        var yValues = [55, 49, 44, 24, 15];
        var barColors = ["red", "green","blue","orange","brown"];
        
        new Chart("graph", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: "World Wine Production 2018"
            }
        }
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
    
        new Chart("graph", {
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