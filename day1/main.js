const fs = require('fs');

const data = fs
  .readFileSync('./input2.txt', { encoding: 'utf8', flag: 'r' })
  .split('\n');

// Part 1
let currentElfCalories = 0;
let mostElfCalories = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] === '') {
    currentElfCalories = 0;
  } else {
    currentElfCalories += Number(data[i]);
    mostElfCalories = Math.max(currentElfCalories, mostElfCalories);
  }
}

console.log('Part 1: ' + mostElfCalories);

// Part 2
let calories = {};
let elf = 0;
let elfCalories = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] !== '') {
    elfCalories += Number(data[i]);
  } else {
    calories[elf] = elfCalories;
    elfCalories = 0;
    elf++;
  }
}

console.log(
  'Part 2: ' +
    Object.values(calories)
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((prev, cur) => prev + cur)
);
