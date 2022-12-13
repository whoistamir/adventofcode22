const tlib = require('../tlib');
const data = tlib.readFile('./input.txt');

const m = {};
let messageMarker = 0;
for (let i = 0; i < data.length; i++) {
  if (m[data[i]] == undefined) {
    m[data[i]] = 1;
  } else {
    m[data[i]] += 1;
  }

  if (i >= 14) {
    if (m[data[i - 14]] == 1) {
      delete m[data[i - 14]];
    } else {
      m[data[i - 14]] -= 1;
    }
  }

  if (Object.keys(m).length === 14) {
    messageMarker = i + 1;
    break;
  }
}
console.log('Part 2: ' + messageMarker);
