function getToken(digit) {
  return String(Math.floor(Math.random() * 10 ** digit)).padStart(digit, '0');
}

console.log(getToken(4));