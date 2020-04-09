// Returns a number between 10000000 and 29999999 (8 digits)
const createBaseNumber = () => Math.floor(Math.random() * 29999999) + 10000000;

// Returns the modulus-11 check digit
const checkDigit = (number) => {
	const digits = number.split('');

	const reducer = (acc, current, idx) => ((9 - idx) * current) + acc;

	const sum = digits.reduce(reducer, 0);

	const mod = sum % 11;

	return mod < 2 ? 0 : 11 - mod;
};

const generateNIF = () => {
	const baseNumber = createBaseNumber().toString();

	const cd = checkDigit(baseNumber);

	return baseNumber + cd.toString();
};

module.exports.templateTags = [
	{
		name: "NIFgen",
		displayName: "Random NIF Generator",
		description: "Generates a rendom valid portuguese NIF",
		async run(context) {
			return generateNIF();
		}
	}
];
