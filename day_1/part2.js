"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log("Reading file");
var raw = (0, fs_1.readFileSync)('./input.txt', 'utf-8');
// console.log(raw);
var current_sum = 0;
var sum_array = [];
for (var _i = 0, _a = raw.split(/\n/); _i < _a.length; _i++) {
    var line = _a[_i];
    console.log(line, "\t", line.length);
    if (line.length == 0) {
        sum_array.push(current_sum);
        current_sum = 0;
    }
    else {
        current_sum += parseInt(line);
        console.log("\t\t", current_sum);
    }
}
sum_array.sort(function (a, b) {
    return b - a;
});
console.log(sum_array[0] + sum_array[1] + sum_array[2]);
