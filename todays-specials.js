"use strict";
var tax =  825;
var price = document.getElementById("price").value;
totalP = tax * parseFloat(price);

function total() {
 
  document.getElementById("total").innerHTML = totalP;

}