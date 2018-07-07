// load html before running script
$(document).ready(function() {

// VARIABLES
var dealerArray = [];
var dealerNumber = 0;
var animalArray = [1,2,3,4,5,6,7,8,9,10,11,12];
var yourScore = 0;

var donkey = Math.floor(Math.random()*animalArray.length) + 1;
var goat = Math.floor(Math.random()*animalArray.length) + 1;
var cow = Math.floor(Math.random()*animalArray.length) + 1;
var hen = Math.floor(Math.random()*animalArray.length) + 1;


var wins = 0;
var losses = 0;

// FUNCTIONS
function reset() {
  yourScore = 0;
  donkey = Math.floor(Math.random()*animalArray.length) + 1;
  goat = Math.floor(Math.random()*animalArray.length) + 1;
  cow = Math.floor(Math.random()*animalArray.length) + 1;
  hen = Math.floor(Math.random()*animalArray.length) + 1
  $("#randomNumber").html(dealerNumber);
  $("#myNumber").html(yourScore);
}

function dealerReset() {
  dealerNumber = Math.floor(Math.random()*dealerArray.length) + 1;
  $("#randomNumber").text(dealerNumber);
}

function winCheck() {
  // Check if "your score" equals or exceeds computer selection. Keep score of wins and loses.
  if (yourScore==dealerNumber) {
    console.log("you win")
    wins++;
    $("#wins").html("Wins: " + wins);
    reset();
    dealerReset();

    } else if (yourScore>dealerNumber) {
          console.log("you lose")
          losses++; 
          $("#losses").html("Losses: " + losses);
          reset();
          dealerReset();
        }

  // Generate array of options for "dealer" between 19 - 120
  for (var i = 19; i <= 120; i++) {
    dealerArray.push(i);
  }

  dealerReset();


  // Create on-click events for each animal button that increase "your score"
  $("#Donkey").on("click", function() {
      donkey = parseInt(donkey);
      console.log(donkey);
      yourScore += donkey;
      $("#myNumber").html(yourScore);  
      winCheck();
    
  });

  $("#Cow").on("click", function() {
      console.log(cow);
      cow = parseInt(cow);
      yourScore += cow;
      $("#myNumber").html(yourScore);  
      winCheck();
  });
  

  $("#Goat").on("click", function() {
      console.log(goat);
      goat = parseInt(goat);
      yourScore += goat;
      $("#myNumber").html(yourScore);  
      winCheck();
  });

  $("#Hen").on("click", function() {
      console.log(hen);
      hen = parseInt(hen);
      yourScore += hen;
      $("#myNumber").html(yourScore);  
      winCheck();
  });    

});