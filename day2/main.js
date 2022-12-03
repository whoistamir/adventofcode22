const fs = require('fs');
const help = require('./help');

const data = fs
  .readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' })
  .split('\n')
  .map((item) => [item.charAt(0), item.charAt(2)]);

//Part 1
let totalScore = 0;
for (const game of data) {
  const them = game[0];
  const me = game[1];

  if (them == '' || me == '') {
    continue;
  }

  //Find winner
  totalScore += help.checkWin(them, me);
}

console.log('Part 1: ' + totalScore);

//Part 2
let secondTotalScore = 0;

for (const game of data) {
  const them = game[0];
  const me = game[1];

  if (them == '' || me == '') {
    continue;
  }

  //Find move
  secondTotalScore += help.findMove(them, me);
}

console.log('Part 2: ' + secondTotalScore);
