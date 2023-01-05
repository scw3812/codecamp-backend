function getToken(digit) {
  if (!digit || digit <= 0 || digit >= 10) {
    console.log('error');
    return;
  }
  return String(Math.floor(Math.random() * 10 ** digit)).padStart(digit, '0');
}

console.log(getToken());