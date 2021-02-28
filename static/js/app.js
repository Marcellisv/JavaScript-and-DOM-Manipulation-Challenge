// from data.js
var tableData = data;

// YOUR CODE HERE!
//refrence the table body

var table_body = d3.select("tbody");


var filter_button= d3.select('#filter-btn');

 // clear table info before appending filtered data
 function buildthetable(data) {
  
  table_body.html("");

// create rows for data sighting
  data.forEach((sighting) => {
    
    var row = table_body.append("tr");

    Object.values(sighting).forEach((ufo) => {
      var ufo_append_info = row.append("td");
        ufo_append_info.text(ufo);
      } 
    );
  });
}

//
var filter_click = d3.select("#filter-btn");

filter_click.on("click", function() {
  d3.event.preventDefault();

  var date_html = d3.select("#datetime");
  var filter_term = date_html.property("value");

  var city_html= d3.select("#city")
  var filter_term = city_html.property("value");


  var state_html= d3.select("#state")
  var filter_term = state_html.property("value");


  var country_html= d3.select("#country")
  var filter_term = country_html.property("value");


  var shape_html= d3.select("#shape")
  var filter_term = shape_html.property("value");

  if (filter_term == "") {
    buildthetable(tableData);
    

  } else {

    var filer_response = tableData.filter(sighting => sighting.datetime === filter_term);
    var filer_response = tableData.filter(sighting => sighting.city === filter_term);
    var filer_response = tableData.filter(sighting => sighting.state === filter_term);
    var filer_response = tableData.filter(sighting => sighting.country === filter_term);
    var filer_response = tableData.filter(sighting => sighting.shape === filter_term);


    buildthetable(filer_response);
  }

  });

// build table
buildthetable(tableData);