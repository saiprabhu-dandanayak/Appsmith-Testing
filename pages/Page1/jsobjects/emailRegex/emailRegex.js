export default {
  checkEmailValidity(value) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailInput = Email.text;
    console.log(">>>>>>",emailInput)
    if (emailInput !== "" && emailRegex.test(emailInput)) {
      return true;
    } else {
      return false;
    }
  }
};
