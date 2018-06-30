// VARIABLES
var dealerArray = [];
var dealerNumber = "";

// // load html before running script
$(document).ready(function() {

  // Generate, store and display random computer selection between 19 - 120
  for (var i = 19; i <= 120; i++) {
    dealerArray.push(i);
  }

  // user clicks to start game
  $("#start").click(function() {
    
  var dealerNumber = dealerArray[Math.floor(Math.random()*dealerArray.length)];
    $("#randomNumber").text(dealerNumber);

  });

});
// Generate, store and hide random number for each animal between 1 - 12

// Create on-click events for each animal button that increase "your score"

// Check if "your score" equals or exceeds computer selection

// Keep score of wins and loses

// Reset game without reseting wins and loses

// Cap wins and loses at 10
