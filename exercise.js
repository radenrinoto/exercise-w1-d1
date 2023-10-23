// Nama lengkap: Daniel Riyanto

function checkInRange(num, start, end) {
  // Enter your code below;
  const checkWord = (num >= start && num <= end) ? "between" : "outside";
  console.log(`${num} is ${checkWord} the range ${start} and ${end}`);
}

checkInRange(15,11,30) //"15 is between the range 11 and 30"
checkInRange(20,34,51) //"20 is outside the range 34 and 51"


function isEvenorOdd(num) {
  // Enter your code below;
  console.log(`${num} is a ${num % 2 == 1 ? "Odd" : "Even"} number`);
}

isEvenorOdd(10) //"10 is a Even number"
isEvenorOdd(19) //"19 is a Odd number"

function findLargest(num1, num2) {
  // Enter your code below;
  if (num1 !== num2) {
    console.log(`${Math.max(num1, num2)} is the largest number`);
  } else {
    console.log(`${num1} is equal to ${num2}`);
  }
}

findLargest(21,45) //"45 the largest number"
findLargest(34,18) //"34 is the largest number"
findLargest(41,41) //"41 is equal to 41"

function generateScore(score) {
  // Enter your code below;
  if (score < 0 || score > 100) {
    console.log("This is not possible, an error has occurred.");
  } else if (score < 20) {
    console.log("That was a terrible score — total fail!");
  } else if (score < 40) {
    console.log("You know some things, but it\'s a pretty bad score. Needs improvement.");
  } else if (score < 70) {
    console.log("You did a passable job, not bad!");
  } else if (score < 90) {
    console.log("That's a great score, you really know your stuff.");
  } else { // score of 90 to 100
    console.log("What an amazing score! Did you cheat? Are you for real?");
  }
}

generateScore(75);
// Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
// Score of 0 to 19 — "That was a terrible score — total fail!"
// Score of 20 to 39 — "You know some things, but it\'s a pretty bad score. Needs improvement."
// Score of 40 to 69 — "You did a passable job, not bad!"
// Score of 70 to 89 — "That''s a great score, you really know your stuff."
// Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"