export default {
	async fetchData(query) {
		const url = `https://restcountries.eu/rest/v2/${query}`;
		const reponse = await fetch(url);
		const data = await reponse.json();
		return data;
	},
};
