/*
You will be given a string of English digits "stuck" together, like this:
  "zeronineoneoneeighttwoseventhreesixfourtwofive"

Your task is to split the string into separate digits:
  "zero nine one one eight two seven three six four two five"

Examples:
  "three"              -->  "three"
  "eightsix"           -->  "eight six"
  "fivefourseven"      -->  "five four seven"
  "ninethreesixthree"  -->  "nine three six three"
  "fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
*/


// Solution

function uncollapse(digits){
  return (digits.match(/zero|one|two|three|four|five|six|seven|eight|nine/g) || []).join` `
}

// or

function uncollapse(digits) {
  const writtenNumbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  for (let i = 0; i < writtenNumbers.length; i++) {
    let re = new RegExp(writtenNumbers[i], "g");
    digits = digits.replace(re, `${writtenNumbers[i]}` + " ");
  }
  return digits.slice(0, -1);
}