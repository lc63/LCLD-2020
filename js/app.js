function renderRegions(region_list) {
  region_list.sort(function (record1, record2) {
    return record2.voterTurnout - record1.voterTurnout;
  });

  var tbody = document.querySelector("tbody");
  tbody.textContent = "";
  for (var i = 0; i < region_list.length; i++) {
    var row = renderRegion(region_list[i]);

    tbody.appendChild(row);
  }
}
function renderRegion(region) {
  var tr = document.createElement("tr");

  tr.appendChild(renderRegionProp(region.name, true));
  tr.appendChild(renderRegionProp(region.voterTurnout));
  tr.appendChild(renderRegionProp(region.yesVotes));
  tr.appendChild(renderRegionProp(region.library));
  tr.appendChild(renderRegionProp(region.distanceToLibrary));

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

var searchInput = document.getElementById("choose-region");

function regionName(region) {
  var userInput = searchInput.value;
  var lowUserInput = userInput.toLowerCase();
  var lowTitle = region.name.toLowerCase();
  if (lowTitle.indexOf(lowUserInput) >= 0) {
    return true;
  } else {
    return false;
  }
}
searchInput.addEventListener("change", function () {
  var userInput = searchInput.value;
  var lowUserInput = userInput.toLowerCase();
  var filter_regions = REGIONS.filter(regionName);
  renderRegions(filter_regions);
});
