import { readFileSync } from "fs";

// setup
// brute force map of maps
// A,X = ROCK (1 pt.)
// B,Y = PAPER (2 pts.)
// C,Z = SCISSORS (3 pts.)
// loss = 0 pts.
// draw = 3 pts.
// win = 6 pts.
const results = {"A": {"X": 4,
                       "Y": 8,
                       "Z": 3},
                 "B": {"X": 1,
                       "Y": 5,
                       "Z": 9},
                 "C": {"X": 7,
                       "Y": 2,
                       "Z": 6}};

console.log("Reading file");
const raw:string = readFileSync('./input.txt','utf-8');

let sum = 0;
for (const line of raw.split(/\n/)) {
  let [them, me] = line.split(" ");
  sum += results[them][me];
}

console.log(sum);