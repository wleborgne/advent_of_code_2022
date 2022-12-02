import { readFileSync } from "fs";

// setup
// brute force map of maps
// A = ROCK (1 pt.)
// B = PAPER (2 pts.)
// C = SCISSORS (3 pts.)
// 
// X = loss = 0 pts.
// Y = draw = 3 pts.
// Z = win = 6 pts.
const results = {"A": {"X": 3,
                       "Y": 4,
                       "Z": 8},
                 "B": {"X": 1,
                       "Y": 5,
                       "Z": 9},
                 "C": {"X": 2,
                       "Y": 6,
                       "Z": 7}};

console.log("Reading file");
const raw:string = readFileSync('./input.txt','utf-8');

let sum = 0;
for (const line of raw.split(/\n/)) {
  let [them, me] = line.split(" ");
  sum += results[them][me];
}

console.log(sum);