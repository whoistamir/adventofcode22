//A - Rock, B - Paper, C - Scissors
//X - Rock, Y - Paper, Z - Scissors
//1 - Rock, 2 - Paper, 3 - Scissors
//0 - Loss, 3 - Draw, 6 - Win
const checkWin = (them, me) => {
  //Rock & Scissors = Loss
  if (them == 'A' && me == 'Z') {
    return 0 + 3;
  }

  //Rock & Paper = Win
  if (them == 'A' && me == 'Y') {
    return 6 + 2;
  }

  //Rock & Rock = Draw
  if (them == 'A' && me == 'X') {
    return 3 + 1;
  }

  //Scissors & Rock = Win
  if (them == 'C' && me == 'X') {
    return 6 + 1;
  }

  //Scissors & Paper = Loss
  if (them == 'C' && me == 'Y') {
    return 0 + 2;
  }

  //Scissors & Scissors = Draw
  if (them == 'C' && me == 'Z') {
    return 3 + 3;
  }

  //Paper & Rock = Loss
  if (them == 'B' && me == 'X') {
    return 0 + 1;
  }

  //Paper & Scissors = Win
  if (them == 'B' && me == 'Z') {
    return 6 + 3;
  }

  //Paper & Paper = Draw
  if (them == 'B' && me == 'Y') {
    return 3 + 2;
  }
};

//A - Rock, B - Paper, C - Scissors
//X - Lose, Y - Draw, Z - Win
//1 - Rock, 2 - Paper, 3 - Scissors
//0 - Loss, 3 - Draw, 6 - Win
const findMove = (them, me) => {
  //Rock & Win = Paper
  if (them == 'A' && me == 'Z') {
    return 6 + 2;
  }

  //Rock & Draw = Rock
  if (them == 'A' && me == 'Y') {
    return 3 + 1;
  }

  //Rock & Loss = Scissors
  if (them == 'A' && me == 'X') {
    return 0 + 3;
  }

  //Scissors & Loss = Paper
  if (them == 'C' && me == 'X') {
    return 0 + 2;
  }

  //Scissors & Draw = Scissors
  if (them == 'C' && me == 'Y') {
    return 3 + 3;
  }

  //Scissors & Win = Rock
  if (them == 'C' && me == 'Z') {
    return 6 + 1;
  }

  //Paper & Loss = Rock
  if (them == 'B' && me == 'X') {
    return 0 + 1;
  }

  //Paper & Win = Scissors
  if (them == 'B' && me == 'Z') {
    return 6 + 3;
  }

  //Paper & Draw = Paper
  if (them == 'B' && me == 'Y') {
    return 3 + 2;
  }
};

module.exports = {
  checkWin,
  findMove,
};
