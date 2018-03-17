var attack;
var hpCard1 = 120;
var hpCard2 = 100;
var hpCard3 = 150;
var hpCard4 = 180;
var counterAttack;

$(".startContainer").on("click", "#card1", function() {
  // move #card1 to playerArea
  // move #cards 2-4 to enemiesArea
  attack = 6;
  hpCard1;
  console.log(attack, hpCard1);
});

// $(".enemiesArea").on("click", "#card2", function() {
//   // move #card2 to defenderArea

//   console.log(counterAttack, hpCard2);
// });

$(".fightingCage").on("click", ".attackButton", function(){
  attack;
  console.log("Testing" + attack);
  // hpCard2 = 100;
  counterAttack = 5;
  hpCard2 = hpCard2 - attack;
  attack += 6;
  hpCard1 = hpCard1 - counterAttack;
  console.log(hpCard2, attack, hpCard1);
});

$(".fightingCage").on("click", ".attackButton", function(){
  attack;
  console.log("Testing" + attack);
  // hpCard3 = 100;
  counterAttack = 5;
  hpCard3 = hpCard3 - attack;
  attack += 6;
  hpCard1 = hpCard1 - counterAttack;
  console.log(hpCard3, attack, hpCard1);
});

$(".fightingCage").on("click", ".attackButton", function(){
  attack;
  console.log("Testing" + attack);
  // hpCard4 = 100;
  counterAttack = 5;
  hpCard4 = hpCard4 - attack;
  attack += 6;
  hpCard1 = hpCard1 - counterAttack;
  console.log(hpCard4, attack, hpCard1);
});