import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';

function createTokenOfPhone(phoneNumber) {
  if (checkValidationPhone(phoneNumber)) {
    sendTokenToSMS(getToken(6));
  }
}

createTokenOfPhone('01038129133');