function renderRegions(region_list) {
  var tbody = document.querySelector("tbody");
  tbody.textContent = "";
  region_list.forEach(function (region) {
    tbody.appendChild(renderRegion(region));
  });
}

/*var filterName = title.filter(function (p)){
    return (p.name = userInput);
  };*/

function renderRegion(regions) {
  /*REGIONS.sort(function (record1, record2) {
      return record2.voterTurnout - record1.voterTurnout;
    });*/

  var tr = document.createElement("tr");
  var prop = renderRegionProp(regions.name, true);
  var prop2 = renderRegionProp(regions.voterTurnout, false);
  var prop3 = renderRegionProp(regions.yesVotes, false);
  var prop4 = renderRegionProp(regions.library, true);
  var prop5 = renderRegionProp(regions.distanceToLibrary, false);

  tr.appendChild(prop);
  tr.appendChild(prop2);
  tr.appendChild(prop3);
  tr.appendChild(prop4);
  tr.appendChild(prop5);

  return tr;
}

function renderRegionProp(value, nonNumeric) {
  var td = document.createElement("td");
  td.textContent = value;
  if (nonNumeric) {
    td.classList.add("non-numeric");
  }
  return td;
}
renderRegions(REGIONS);

/*var userInput = document.getElementById("movie-filter");
userInput.addEventListener("input", function filterTitles(arr, userInput) {
    return arr.filter(function (movies.title) {
        return movies.title.toLowerCase().indexOf(userInput.toLowerCase())
    })*/
