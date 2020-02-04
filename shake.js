let process = require('process');

function print(str) {
  process.stdout.write(str);
}

let dice = [
  'AAEEGN',
  'ELRTTY',
  'AOOTTW',
  'ABBJOO',
  'EHRTVW',
  'CIMOTU',
  'DISTTY',
  'EIOSST',
  'DELRVY',
  'ACHOPS',
  'HIMNQU',
  'EEINSU',
  'EEGHNW',
  'AFFKPS',
  'HLNNRZ',
  'DEILRX',]

function shuffle(array) {
  for (let x = 0; x < 16; x++) {
    let y = Math.floor(Math.random() * (x + 1));
    [array[x], array[y]] = [array[y], array[x]];
  }
}
//source for shuffle: https://javascript.info/task/shuffle

function shake() {
  shuffle(dice)
  console.log(dice)
  let randLet = ''
  letCount = 0
  for (i = 0; i < dice.length; i++) {
    for (j = 0; j < 1; j++) {
      randLet = randLet + dice[i].charAt(Math.floor(Math.random() * 6));
      if(randLet === 'Q') {
        randLet = 'Qu'
      }
    }
    print(randLet.padEnd(3))
    randLet = '';
    letCount = letCount + 1;
      if (letCount === 4) {
        console.log();
        letCount = 0;
      }
  }
  return randLet
}

console.log(shake())
