import { readFileSync } from "fs";

console.log("Reading file");
const raw:string = readFileSync('./input.txt','utf-8');

let priority_sum = 0;
for (const line of raw.split(/\n/)) {
  // split line in half
  let first = line.split('').slice(0, (line.length/2) );
  let second = line.split('').slice(line.length/2, line.length);
  // find chars is first half also in second half
  let value = first.filter(function (x,y,z) {
    return second.indexOf(x) != -1;
  });

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