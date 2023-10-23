// Adam Sake Arfansyah
function checkInRange(num, start, end) {
  // Enter your code below;
  let result;
  if (num >= start && num <= end) {
    result = `${num} is between the range ${start} and ${end}`;
  } else {
    result = `${num} is outside the range ${start} and ${end}`;
  }
  console.log(result);
}

checkInRange(15, 11, 30); //"15 is between the range 11 and 30"
checkInRange(20, 34, 51); //"20 is outside the range 34 and 51"

function isEvenorOdd(num) {
  // Enter your code below;
  let result;
  if (num % 2 === 0) {
    result = `${num} is a Even number`;
  } else {
    result = `${num} is a Odd number`;
  }
  console.log(result);
}

isEvenorOdd(10); //"10 is a Even number"
isEvenorOdd(19); //"19 is a Odd number"

function findLargest(num1, num2) {
  // Enter your code below;
  let result;
  if (num1 > num2) {
    result = `${num1} is the largest number`;
  }
  if (num1 < num2) {
    result = `${num2} the largest number`;
  }
  if (num1 === num2) {
    result = `${num1} is equal to ${num2}`;
  }
  console.log(result);
}

findLargest(21, 45); //"45 the largest number"
findLargest(34, 18); //"34 is the largest number"
findLargest(41, 41); //"41 is equal to 41"

function generateScore(score) {
  // Enter your code below;
  let result;

  if (score >= 0 && score <= 19) {
    result = "That was a terrible score — total fail!";
  }
  if (score >= 20 && score <= 39) {
    result = "You know some things, but it's a pretty bad score. Needs improvement.";
  }
  if (score >= 40 && score <= 69) {
    result = "You did a passable job, not bad!";
  }
  if (score >= 70 && score <= 89) {
    result = "That''s a great score, you really know your stuff.";
  }
  if (score >= 90 && score <= 100) {
    result = "What an amazing score! Did you cheat? Are you for real?";
  } else {
    result = "This is not possible, an error has occurred.";
  }

  console.log(result);
}

generateScore(180);
// Score of less than 0 or more than 100 — "This is not possible, an error has occurred."
// Score of 0 to 19 — "That was a terrible score — total fail!"
// Score of 20 to 39 — "You know some things, but it\'s a pretty bad score. Needs improvement."
// Score of 40 to 69 — "You did a passable job, not bad!"
// Score of 70 to 89 — "That''s a great score, you really know your stuff."
// Score of 90 to 100 — "What an amazing score! Did you cheat? Are you for real?"
