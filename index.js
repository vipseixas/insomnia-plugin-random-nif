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

const responseCacheHook = context => {
	const requestId = context.response.getRequestId();
	context.store.removeItem(requestId);
};

const run = async (context, CacheType) => {
	// No cache, just return the new value
	if (!CacheType || CacheType == 'none')
		return generateNIF();

	// For now caches are per request only
	const { requestId } = context.meta;

	const cachedValue = await context.store.getItem(requestId);

	// If no cached value, set one
	if (cachedValue === null) {
		const nif = generateNIF();
		context.store.setItem(requestId, nif);  // Don't need to wait for this
		return nif;
	}

	// Return cached value for request
	return context.store.getItem(requestId);
};

module.exports.responseHooks = [ responseCacheHook ];

module.exports.templateTags = [
	{
		name: "NIFgen",
		displayName: "Random NIF Generator",
		description: "Generates a rendom valid portuguese NIF",
		args: [
			{
				displayName: "CacheType",
				type: "enum",
				defaultValue: "none",
				options: [
					{
						displayName: "None",
						value: "none"
					},
					{
						displayName: "Request",
						value: "request"
					}
				]
			}
		],
		run
	}
];
