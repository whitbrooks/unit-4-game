// VARIABLES
var dealerArray = [];
var dealerNumber = 0;
var animalArray = [];
var yourScore = 0;
var donkey = 0;
var cow = 0;
var goat = 0;
var hen = 0;

// // load html before running script
$(document).ready(function() {

  // Generate array of options for "dealer" between 19 - 120
  for (var i = 19; i <= 120; i++) {
    dealerArray.push(i);
  }

  // Generate array of options for animals between 1 - 12
  for (var i = 1; i <= 12; i++) {
    animalArray.push(i);
  }

  // user clicks to start game
  $("#start").click(function() {
  
      // select and display random number for dealer
      var dealerNumber = dealerArray[Math.floor(Math.random()*dealerArray.length)];
        $("#randomNumber").html(dealerNumber);

      // select and store random numbers for each animal
      // var donkey = animalArray[Math.floor(Math.random()*animalArray.length)];
      // console.log(donkey);

      // var cow = animalArray[Math.floor(Math.random()*animalArray.length)];
      // console.log(cow);  

      // var goat = animalArray[Math.floor(Math.random()*animalArray.length)];
      // console.log(goat);

      // var hen = animalArray[Math.floor(Math.random()*animalArray.length)];
      // console.log(hen);
    
  });

  // Create on-click events for each animal button that increase "your score"
  $("#Donkey").click(function() {
      var donkey = animalArray[Math.floor(Math.random()*animalArray.length)];
      console.log(donkey);
      donkey = parseInt(donkey);
      yourScore += donkey;
      $("#myNumber").html(yourScore);
  });
  
  $("#Cow").click(function() {
    var cow = animalArray[Math.floor(Math.random()*animalArray.length)];
    console.log(cow);
    cow = parseInt(cow);
    yourScore += cow;
    $("#myNumber").html(yourScore);
  });

  $("#Goat").click(function() {
    var goat = animalArray[Math.floor(Math.random()*animalArray.length)];
    console.log(goat);
    goat = parseInt(goat);
    yourScore += goat;
    $("#myNumber").html(yourScore);
  });

  $("#Hen").click(function() {
    var hen = animalArray[Math.floor(Math.random()*animalArray.length)];
    console.log(hen);
    hen = parseInt(hen);
    yourScore += hen;
    $("#myNumber").html(yourScore);
  });

  

// Check if "your score" equals or exceeds computer selection

// Keep score of wins and loses

// Reset game without reseting wins and loses

// Cap wins and loses at 10
});