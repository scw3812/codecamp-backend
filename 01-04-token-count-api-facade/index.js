function checkValidationPhone(phoneNumber) {
  if (phoneNumber.length !== 10 && phoneNumber.length !== 11) {
    console.log('error: invalid phone number')
    return false;
  }
  return true;
}

function getToken(digit) {
  const token = String(Math.floor(Math.random() * 10 ** digit)).padStart(digit, '0');
  return token;
}

function sendTokenToSMS(token) {
  console.log(token);
}

function createTokenOfPhone(phoneNumber) {
  if (checkValidationPhone(phoneNumber)) {
    sendTokenToSMS(getToken(6));
  }
}

createTokenOfPhone('01038129133');