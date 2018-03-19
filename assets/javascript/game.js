var attack;
var hpCard1 = 120;
var hpCard2 = 100;
var hpCard3 = 150;
var hpCard4 = 180;
var counterAttack;
var player;
var defender;

// MOVES CARDS TO AREAS ON INITIAL GAME CLICK
$(".startContainer").on("click", "#card1", function() {
  // move #card1 to playerArea
  $(".playerArea").append($("#card1"));
  // move #cards 2-4 to enemiesArea
  $(".enemiesArea").append($("#card2, #card3, #card4"));
  player = "card1"; 
  attack = 6;
  hpCard1;
  console.log(attack, hpCard1);
});

$(".startContainer").on("click", "#card2", function() {
  // move #card2 to playerArea
  $(".playerArea").append($("#card2"));
  // move #cards 2-4 to enemiesArea
  $(".enemiesArea").append($("#card1, #card3, #card4"));
  player = "card2";
  attack = 6;
  hpCard2;
  console.log(attack, hpCard2);
});

$(".startContainer").on("click", "#card3", function() {
  // move #card3 to playerArea
  $(".playerArea").append($("#card3"));
  // move #cards 2-4 to enemiesArea
  $(".enemiesArea").append($("#card2, #card1, #card4"));
  player = "card3";
  attack = 6;
  hpCard3;
  console.log(attack, hpCard3);
});

$(".startContainer").on("click", "#card4", function() {
  // move #card4 to playerArea
  $(".playerArea").append($("#card4"));
  // move #cards 2-4 to enemiesArea
  $(".enemiesArea").append($("#card2, #card3, #card1"));
  player = "card4";
  attack = 6;
  hpCard4;
  console.log(attack, hpCard4);
});

// MOVES ENEMY CARD
$(".enemiesArea").on("click", "#card2", function() {
  // move #card2 to defenderArea
  $(".defenderArea").append($("#card2"));
  defender = "card2";
  console.log(counterAttack, hpCard2);
});

$(".enemiesArea").on("click", "#card1", function() {
  // move #card2 to defenderArea
  $(".defenderArea").append($("#card1"));
  defender = "card1";
  console.log(counterAttack, hpCard1);
});

$(".enemiesArea").on("click", "#card3", function() {
  // move #card3 to defenderArea
  $(".defenderArea").append($("#card3"));
  defender = "card3";
  console.log(counterAttack, hpCard3);
});

$(".enemiesArea").on("click", "#card4", function() {
  // move #card4 to defenderArea
  $(".defenderArea").append($("#card4"));
  defender = "card4";
  console.log(counterAttack, hpCard4);
});

// Fighting Stage
$(".fightingCage").on("click", ".attackButton", function(){
  if ((player === "card1") && (defender === "card2")) { 
    attack;
    console.log("Testing attack: " + attack);
    // hpCard2 = 100;
    counterAttack = 5;
    hpCard2 = hpCard2 - attack;
    attack += 6;
    hpCard1 = hpCard1 - counterAttack;
    console.log(hpCard2, attack, hpCard1);
    if (hpCard2 <= 0) {
      console.log("Enemy Defeated");
      $("#card2").hide();
    } else if (hpCard1 <= 0) {
      console.log("You Lose");
    }
  }
});
