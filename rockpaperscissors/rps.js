// 0 -> rock
// 1 -> paper
// 2 -> scissors

var cpuChoice;

function getRandomChoice()
{
  min = 0;
  max = 3;
  return Math.floor(Math.random() * (max - min)) + min;
}
function chooseRock()
{
  cpuChoice = getRandomChoice();
  switch(cpuChoice)
  {
    case 0:
      console.log("Rock!\nIt's a tie!");
    case 1:
      console.log("Paper!\nYou lost!");
    case 2:
      console.log("Scissors!\nYou won!");
  }
}
function choosePaper()
{
  cpuChoice = getRandomChoice();
  switch(cpuChoice)
  {
    case 0:
      console.log("Rock!\nYou won!!");
    case 1:
      console.log("Paper!\nIt's a tie!");
    case 2:
      console.log("Scissors!\nYou lost!");
  }
}
function chooseScissors()
{
  cpuChoice = getRandomChoice();
  switch(cpuChoice)
  {
    case 0:
      console.log("Rock!\nYou lost!");
    case 1:
      console.log("Paper!\nYou won!");
    case 2:
      console.log("Scissors!\nIt's a tie!");
}
