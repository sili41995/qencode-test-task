import AuthParams from './authParams';

const enum Messages {
  emailReqErr = 'Email is required',
  emailRegExpErr = 'Email must be letters, digits, dot and @',
  passReqErr = 'Password is required',
  passMinLengthErr = `Password minimum length is ${AuthParams.passMinLength} characters`,
  greetings = 'Hello',
  resetPassSuccess = 'Go to the specified email to confirm the action',
  setPasswordSuccess = 'Password updated successfully',
}

export default Messages;
