function renderLibraries(library_list) {
  library_list.sort(function (record1, record2) {
    return record2.name - record1.name;
  });

  var tbody = document.querySelector("tbody");
  tbody.textContent = "";
  for (var i = 0; i < library_list.length; i++) {
    var row = renderLibrary(library_list[i]);

    tbody.appendChild(row);
  }
}

function renderLibrary(library) {
  var tr = document.createElement("tr");

  tr.appendChild(renderLibraryProp(library.name, true));
  tr.appendChild(renderLibraryProp(library.borrowers, true));
  tr.appendChild(renderLibraryProp(library.budget, true));
  tr.appendChild(renderLibraryProp(library.physical, true));
  tr.appendChild(renderLibraryProp(library.visits, true));
  tr.appendChild(renderLibraryProp(library.checkouts, true));
  tr.appendChild(renderLibraryProp(library.programs, true));

  return tr;
}

function renderLibraryProp(value, nonNumeric) {
  var td = document.createElement("td");
  td.textContent = value;
  if (nonNumeric) {
    td.classList.add("non-numeric");
  }
  return td;
}
