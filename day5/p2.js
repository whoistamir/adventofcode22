const tlib = require('../tlib');

let [input, instructions] = tlib.readFile('input.txt').split('\n\n');

input = input.split('\n');
input = input.slice(0, input.length - 1);

const crates = [];
let x = 0;

for (const line of input) {
  x = 0;
  for (let i = 0; i < line.length; i += 4) {
    const crate = line.substring(i, i + 4).trim();

    if (crates[x] == undefined) {
      crates[x] = [];
    }

    if (crate !== '') {
      crates[x].push(crate[1]);
    }
    x++;
  }
}

instructions = instructions.split('\n');

for (const line of instructions) {
  const words = line.split(' ');
  const amt = words[1];
  const src = words[3] - 1;
  const dst = words[5] - 1;

  const arr = [];
  for (let i = 0; i < amt; i++) {
    const popped = crates[src].shift();
    arr.push(popped);
  }

  let temp = [...crates[dst]];
  crates[dst] = arr.concat(temp);
}

let ans = '';
crates.forEach((crate) => {
  ans += crate[0];
});

console.log('Part 2: ' + ans);
