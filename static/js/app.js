// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

//
var date_data= d3.select(#datetime)
var city_data = d3.select(#city)
var state = d3.select(#reset-btn)
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var populate = (datetime) =>
        dataInput.foreach(ufosightins) =>
                var row = tbody.append("tr");
                columns.forEach(column => row.append(td).text(ufo_sightins[column]))

var 