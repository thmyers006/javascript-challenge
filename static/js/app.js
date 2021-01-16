// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("#ufo-table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// add functionality to Filter Table button
var filter_button = d3.select("#filter-btn");

//filter_button.on("click", function(){

// select input element
var date_input = d3.select("#datetime");
    //console.log(date_input);
date_input.on("change", function(){

    // get the value property of the input
    var value = date_input.property("value");
        //console.log(value);

    // use filter function to sort data down by date entered
    var filteredDate = tableData.filter(dates => dates.datetime === value);
        //console.log(filteredDate); 

    filteredDate.forEach(function(filteredDate){
        console.log(filteredDate);
        var row = tbody.append("tr");
        Object.entries(filteredDate).forEach(function([key, value]){
            console.log(key, value);

            //Append a cell to the row for each value in the filteredDate object
            var cell = row.append("td");
            cell.text(value);
        });
    }); 
});
    
