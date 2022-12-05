import { readFileSync } from "fs";

console.log("Reading file");
const raw:string = readFileSync('./input.txt','utf-8');

// for each line in the file
let count = 0;
for (const line of raw.split(/\n/)) {
// split into assignments
  let [first, second] = line.split(',');
// split each assignment into start and end (and convert to int)
  let [first_start, first_end] = first.split('-').map(function (x) {
    return parseInt(x);
  });
  let [second_start, second_end] = second.split('-').map(function (x) {
    return parseInt(x);
  });
  // count where either:
  //    first.start >= second.start && first.end <= second.end
  //    second.start >= first.start && second.end <= first.end
  if ((first_start >= second_start && first_end <= second_end) ||
      (first_start <= second_start && first_end >= second_end)) {
      count += 1;
     }
}

console.log(count);