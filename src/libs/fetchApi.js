const getCountries = async () => {
	const res = await fetch(`https://restcountries.com/v3.1/all`);
	const response = await res.json();

	return response;
};

const getACountry = async (name) => {
	const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
	const response = await res.json();

	return response;
};

export { getCountries, getACountry };
