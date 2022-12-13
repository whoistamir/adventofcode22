const tlib = require('../tlib');
const data = tlib.readFile('./input.txt');

//Part 1
const m = {};
let firstMarker = 0;
for (let i = 0; i < data.length; i++) {
  if (m[data[i]] == undefined) {
    m[data[i]] = 1;
  } else {
    m[data[i]] += 1;
  }

  if (i >= 4) {
    if (m[data[i - 4]] == 1) {
      delete m[data[i - 4]];
    } else {
      m[data[i - 4]] -= 1;
    }
  }

  if (Object.keys(m).length === 4) {
    firstMarker = i + 1;
    break;
  }
}
console.log('Part 1: ' + firstMarker);
