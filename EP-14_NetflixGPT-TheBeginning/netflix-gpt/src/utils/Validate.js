export const checkValidData = (fullName, email, password) => {
  // is Full name or username valid
  const isFullNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(fullName);
  // is email valid
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isFullNameValid) return "Full Name Id is not Valid";
  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
