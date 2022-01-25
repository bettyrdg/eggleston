"use strict";

var orderTotal = 0;


var tableHTML ="<table><tr><th>Image</th><th>Description</th><th>Price</th></tr>";
for (var i = 0; i < item.length; i++) {
  tableHTML += "<tr><td>" + "<img src='specials-img/specials" + item[i] + ".jpg'" + "></td>";
  tableHTML += "<td>" + description[i] +  "<td>" + "$" + price[i] + "</th>";
}
document.getElementById("table").innerHTML = tableHTML;
