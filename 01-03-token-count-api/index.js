function createTokenOfPhone(phoneNumber) {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log('error: invalid phone number')
    return;
  }

  const digit = 6;
  const token = String(Math.floor(Math.random() * 10 ** digit)).padStart(digit, '0');

  console.log(token);
}

createTokenOfPhone('01038129133');