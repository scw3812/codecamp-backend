export function checkValidationPhone(phoneNumber) {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log('error: invalid phone number')
    return false;
  }
  return true;
}

export function getToken(digit) {
  const token = String(Math.floor(Math.random() * 10 ** digit)).padStart(digit, '0');
  return token;
}

export function sendTokenToSMS(token) {
  return token;
}
