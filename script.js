var isDate = function (input) {
  //   write your code here
	// Check if the input is a Date object
    if (Object.prototype.toString.call(input) === '[object Date]') {
        // Check if the input is a valid Date object
        return !isNaN(input.getTime());
    }

    // Check if the input is a string
    if (typeof input === 'string') {
        // Attempt to parse the string into a Date object
        const parsedDate = new Date(input);
        // Check if the parsed date is valid
        return !isNaN(parsedDate.getTime());
    }

    // If the input is neither a Date object nor a string, return false
    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
