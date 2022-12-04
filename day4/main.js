const tlib = require('../tlib');

const data = tlib.readFileByNewline('./input.txt');

// Part 1
const isContained = (i1, i2) => {
  const start1 = Number(i1[0]);
  const end1 = Number(i1[1]);
  const start2 = Number(i2[0]);
  const end2 = Number(i2[1]);

  if (
    (start1 >= start2 && end1 <= end2) ||
    (start1 <= start2 && end1 >= end2)
  ) {
    return true;
  } else {
    return false;
  }
};

//Count number of overlapping intervals
let contained = 0;
for (const set of data) {
  if (set.length == 0) {
    continue;
  }

  //Split strings into intervals
  let split = set.indexOf(',');
  const elf1 = set.slice(0, split);
  const elf2 = set.slice(split + 1, set.length);

  const interval1 = elf1.split('-');
  const interval2 = elf2.split('-');

  //Check if intervals overlap
  if (isContained(interval1, interval2)) {
    contained += 1;
  }
}
console.log('Part 1: ' + contained);

//Part 2
const isOverlapping = (i1, i2) => {
  const start1 = Number(i1[0]);
  const end1 = Number(i1[1]);
  const start2 = Number(i2[0]);
  const end2 = Number(i2[1]);

  return (
    (start1 <= end2 && start2 <= end1) || (start2 <= end1 && start1 <= end2)
  );
};

let overlapping = 0;
for (const set of data) {
  if (set.length == 0) {
    continue;
  }

  //Split strings into intervals
  let split = set.indexOf(',');
  const elf1 = set.slice(0, split);
  const elf2 = set.slice(split + 1, set.length);

  const interval1 = elf1.split('-');
  const interval2 = elf2.split('-');

  //Check if intervals overlap
  if (isOverlapping(interval1, interval2)) {
    overlapping += 1;
  }
}
console.log('Part 1: ' + overlapping);
