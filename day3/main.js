const tlib = require('../tlib');

const letters = tlib.letterMap();

//Separate string into two halves
//Find single common letter between two halves
const data = tlib.readFileByNewline('./input.txt');

let doubleLetter = null;
let priority = 0;

const commonLetters = [];

for (const sack of data) {
  if (sack == '') {
    continue;
  }
  const middle = Math.floor(sack.length / 2);
  const cmp1 = sack.slice(0, middle);
  const cmp2 = sack.slice(middle, sack.length);

  const map1 = {};
  const map2 = {};

  //add cmp1 to map1
  for (const char of cmp1) {
    if (map1[char] == undefined) {
      map1[char] = 1;
    }
  }

  //add cmp2 to map2 and check for double letter
  for (const char of cmp2) {
    if (map2[char] == undefined) {
      map2[char] = 1;
      if (map1[char] != undefined) {
        doubleLetter = char;
        commonLetters.push(doubleLetter);
        break;
      }
    }
  }

  priority += letters[doubleLetter];
}
console.log('Part 1: ' + priority);

//Part 2
const findCommonLetter = (strings) => {
  const map1 = {};
  const map2 = {};
  const map3 = {};

  for (const string of strings) {
    if (string == undefined || string == '') {
      return null;
    }
  }

  //add cmp1 to map1
  for (const char of strings[0]) {
    if (map1[char] == undefined) {
      map1[char] = 1;
    }
  }

  let allThree = false;

  //add cmp2 to map2 and check for double letter
  for (const char of strings[1]) {
    if (map2[char] == undefined) {
      map2[char] = 1;
      if (map1[char] != undefined) {
        doubleLetter = char;
        for (const c of strings[2]) {
          if (c == doubleLetter) {
            allThree = true;
            return doubleLetter;
          }
        }
      }
    }
  }
};

let secondPriority = 0;
for (let i = 0; i < data.length; i += 3) {
  const tripleLetter = findCommonLetter([data[i], data[i + 1], data[i + 2]]);

  if (tripleLetter != null) {
    secondPriority += letters[tripleLetter];
  }
}

console.log('Part 2: ' + secondPriority);
