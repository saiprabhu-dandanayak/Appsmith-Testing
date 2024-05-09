export default {
	Input1onTextChanged () {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const emailInput = Email.text ;
		const errorMessage = "Please enter a valid email address";
		console.log(">>>>",emailInput)
		if (emailInput !== "" && !emailRegex.test(emailInput)) {

			return {
				errorMessage: errorMessage
			};
		} else {
			return {
				errorMessage: ""
			};
		}
	}
};
