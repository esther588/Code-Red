if(document.getElementById("opt-1").checked) {
} else if(document.getElementById("opt-2").checked) {
} else if(document.getElementById("opt-3").checked) {
} else if(document.getElementById("opt-4").checked) {
    createPie();
}

function createPie() {
    let pieHtml = document.getElementById("pieChart");
    var data = [
        {x: "White", value: 223553265},
        {x: "Black or African American", value: 38929319},
        {x: "American Indian and Alaska Native", value: 2932248},
        {x: "Asian", value: 14674252},
        {x: "Native Hawaiian and Other Pacific Islander", value: 540013},
        {x: "Some Other Race", value: 19107368},
        {x: "Two or More Races", value: 9009073}
    ];
  
    // create the chart
    var chart = anychart.pie();
  
    // set the chart title
    chart.title("Population by Race for the United States: 2010 Census");
  
    // add the data
    chart.data(data);
  
    // display the chart in the container
    chart.container('container');
    pieHtml.innerHTML = chart.draw();
}