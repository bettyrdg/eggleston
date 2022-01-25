"use strict";

window.onload = rotate;

var theAd = 0;

var adImages = ["images/hotsauce.jpg","images/lady.png","images/photo1.jpeg", "images/table.jpg"];

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("bannerOne").src = adImages[theAd];

     setTimeout(rotate, 3000);
}