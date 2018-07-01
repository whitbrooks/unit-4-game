// VARIABLES
var dealerArray = [];
var dealerNumber = 0;
var animalArray = [];
var yourScore = 0;

var donkey = 0;
var dclick = 0;

var cow = 0;
var cclick = 0;

var goat = 0;
var gclick =0;

var hen = 0;
var hclick = 0;

var wins = 0;
var losses = 0;

// FUNCTIONS
function reset() {
  dealerNumber = "";
  yourScore = 0;
  donkey = "";
  dclick = 0;
  cow = "";
  cclick = 0;
  goat = "";
  gclick = 0;
  hen = "";
  hclick = "";
  wins = "";
  losses = "";
  $("#randomNumber").html(dealerNumber);
  $("#myNumber").html(yourScore);
}

function dealerReset() {
  dealerNumber = dealerArray[Math.floor(Math.random()*dealerArray.length)];
  $("#randomNumber").html(dealerNumber);
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

  // // Cap wins and loses at 10
  // if (wins == 5) {
  //   reset();
  //   dealerReset();
  //   $("#wins").html("Wins:" + wins);
  // }
  // if (losses == 5) {
  //   reset();
  //   dealerReset();
  //   $("#losses").html("Losses:" + losses);
  // }
}



// load html before running script
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
    dealerReset();
   
  });

  // Create on-click events for each animal button that increase "your score"
  $("#Donkey").on("click", function() {
    dclick++;

    if (dclick == 1) {
      donkey = animalArray[Math.floor(Math.random()*animalArray.length)];
      console.log(donkey);
      donkey = parseInt(donkey);
      yourScore += donkey;
      $("#myNumber").html(yourScore);  

      } else if (dclick > 1) {
        console.log(donkey);
        donkey = parseInt(donkey);
        yourScore += donkey;
        $("#myNumber").html(yourScore); 
        winCheck()
      }
    
  });

  $("#Cow").on("click", function() {
    cclick++;

    if (cclick == 1) {
      cow = animalArray[Math.floor(Math.random()*animalArray.length)];
      console.log(cow);
      cow = parseInt(cow);
      yourScore += cow;
      $("#myNumber").html(yourScore);  

      } else if (cclick > 1) {
        console.log(cow);
        cow = parseInt(cow);
        yourScore += cow;
        $("#myNumber").html(yourScore); 
        winCheck()
      }
    
  });
  

  $("#Goat").on("click", function() {
    gclick++;

    if (gclick == 1) {
      goat = animalArray[Math.floor(Math.random()*animalArray.length)];
      console.log(goat);
      goat = parseInt(goat);
      yourScore += goat;
      $("#myNumber").html(yourScore);  

      } else if (gclick > 1) {
        console.log(goat);
        goat = parseInt(goat);
        yourScore += goat;
        $("#myNumber").html(yourScore); 
        winCheck()
      }
    
  });

  $("#Hen").on("click", function() {
    hclick++;

    if (hclick == 1) {
      hen = animalArray[Math.floor(Math.random()*animalArray.length)];
      console.log(hen);
      hen = parseInt(hen);
      yourScore += hen;
      $("#myNumber").html(yourScore);  

      } else if (hclick > 1) {
        console.log(hen);
        hen = parseInt(hen);
        yourScore += hen;
        $("#myNumber").html(yourScore); 
        winCheck()
      }
  });    

});