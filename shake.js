function shake() {
  let randLet = ''
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      randLet = randLet + alphabet.charAt(Math.floor(Math.random() * 26))
    }
    console.log(randLet)
    randLet = ''
  }
  return randLet
}

console.log(shake())
