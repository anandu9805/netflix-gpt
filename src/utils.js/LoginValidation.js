export const loginValidation = (email, password, name, isSignInForm) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
  if (isSignInForm) {
    if (isEmailValid && isPasswordValid) return null;
  } else {
    if (isEmailValid && isPasswordValid && isNameValid) return null;
  }

  if (!isEmailValid) {
    return "Email is invalid.";
  } else if (!isPasswordValid) {
    return "Password id invalid.";
  } else if (!isNameValid) {
    return "Name is invalid.";
  }
};
