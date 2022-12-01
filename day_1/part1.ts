import { readFileSync } from "fs";

console.log("Reading file");
const raw:string = readFileSync('./input.txt','utf-8');
// console.log(raw);

//Iterate over lines, adding consecutive values and
//tracking max value
let max = 0;
let current_sum = 0;
for (const line of raw.split(/\n/)) {
  console.log(line, "\t", line.length);
  if (line.length == 0) {
    if (current_sum > max) {
      max = current_sum;
    }
    console.log(current_sum);
    current_sum = 0;
  } else {
    current_sum += parseInt(line);
    console.log("\t\t", current_sum);
  }
}

console.log("Max sum is ", max); 