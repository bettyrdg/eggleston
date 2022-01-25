"use strict";

var array = [["Butter Croissant<p><i>Comes with butter or jelly", "<img src='images/croissant.jpeg' style='width: 40%'; >","$" + "4"],
            ["Egg Bowl<p><i>Quinoa, avocado, arugula, peppers","<img src='images/egg1.jpg' style='width: 40%';>","$" + "10"],
            ["Avocado&Egg Sandwich<p><i>Served with seasonal fruit","<img src='images/egg2.jpg' style='width: 40%';>","$" + "10"],
            ["Egg&Veggie Bacon<p><i>Classic breakfast bagel sandwich","<img src='images/egg3.jpg' style='width: 40%';>","$" + "8"],
            ["Latte<p><i>Could be served hot or iced, 10oz","<img src='images/latte-small.jpg' style='width: 40%';>", "$" + "4"],
            ["Cold Brew<p><i>Could be served with or without milk, 14oz","<img src='images/coldb.jpg' style='width: 40%';>", "$" + "3"]],
    table = document.getElementById("table");


    for (var i=1; i < table.rows.length; i++) {
      for (var j=0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[j].innerHTML = array[i - 1][j];
      }
    }

