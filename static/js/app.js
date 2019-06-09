// Amber Billings

var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(ufoSighting) {

    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });

});

function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter((item) => {
      return filterKeys.every(key => {
        if (!filters[key].length) return true;
        return filters[key].includes(item[key]);
      });
    });
  }

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    filters = {
        datetime: inputValue,
        city: inputCity,
        state: inputState,
        country: inputCountry,
        shape: inputShape
      };

    var filteredData = multiFilter(tableData, filters);

    var ufoTable = document.getElementById("ufo-table-body");
    ufoTable.innerHTML = "";

    filteredData.forEach(function(ufoSighting) {

        var row = tbody.append("tr");
    
        Object.entries(ufoSighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    
    });

});


