import { readFileSync } from "fs";

console.log("Reading file");
const raw:string = readFileSync('./input.txt','utf-8');

// Almost same as part 1
// split input into groups of three
// for each group of three, find a
// char in first that is in both second and third
// calculate priority and sum as in part 1
let priority_sum = 0;
let lines = raw.split(/\n/);

while (lines.length != 0) {
  let first = lines.shift().split('');
  let second = lines.shift().split('');
  let third = lines.shift().split('');

  let value = first.filter(function (x,y,z) {
    let in_second = second.indexOf(x);
    let in_third = third.indexOf(x);
    return (in_second >= 0) && (in_third >= 0);
  })

  // calculate priority
  // lowercase: code - 96
  // uppercase: code - 38
  let charValue = value[0].charCodeAt(0);
  switch (charValue >= 97) {
    case true: {
      priority_sum += charValue - 96;
      break;
    } 
    default: {
      priority_sum += charValue - 38;
      break;
    }
  }
}

console.log(priority_sum);