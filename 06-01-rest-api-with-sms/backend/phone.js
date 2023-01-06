import CoolsmsMessageService from 'coolsms-node-sdk';

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

export function sendTokenToSMS(phoneNumber, token) {
  const messageService = new CoolsmsMessageService.default(process.env.SMS_KEY, process.env.SMS_SECRET);
  messageService.sendOne({
    to: phoneNumber,
    from: process.env.SMS_SENDER,
    text: `[test] 테스트 ${token}`
  });
}
