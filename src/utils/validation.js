function validateUserName(fieldValue) {
  const userNamePattern = /^[a-zA-Z0-9._-]{6,}$/;

  return userNamePattern.test(fieldValue);
}

function validateEmail(fieldValue) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(fieldValue);
}

function validatePassword(fieldValue) {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  return passwordPattern.test(fieldValue);
}

export {
  validateEmail,
  validatePassword,
  validateUserName
};
