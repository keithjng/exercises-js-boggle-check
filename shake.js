let process = require('process');

function print(str) {
  process.stdout.write(str);
}

function shake() {
  let randLet = ''
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
  letCount = 0
  for (i = 0; i < dice.length; i++) {
    for (j = 0; j < 1; j++) {
      randLet = randLet + dice[i].charAt(Math.floor(Math.random() * 6));
    }
    print(randLet)
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
