import { readFileSync } from "fs";

console.log("Reading file");
const raw:string = readFileSync('./input.txt','utf-8');
// console.log(raw);

let current_sum = 0;
let sum_array = [];
for (const line of raw.split(/\n/)) {
  console.log(line, "\t", line.length);
  if (line.length == 0) {
    sum_array.push(current_sum);
    current_sum = 0;
  } else {
    current_sum += parseInt(line);
    console.log("\t\t", current_sum);
  }
}

sum_array.sort(function(a,b) {
  return b - a;
})

console.log(sum_array[0] + sum_array[1] + sum_array[2]);