export default {
	Input1onTextChanged () {
		//	write code here const 
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailInput = "{{ input1.text }}"; // Replace "input1" with the ID of your in
		console(emailInput)
        const errorMessage = "Please enter a valid email address";

        if (emailInput !== "" && !emailRegex.test(emailInput)) {
            // Email is invalid, set error message
            return {
                errorMessage: errorMessage
            };
        } else {
            // Email is valid, clear error message
            return {
                errorMessage: ""
            };
        }
	}
}