import { createStore } from "vuex";

export default createStore({
	state: {
		countryList: [],
		countryInput: "",
	},
	mutations: {
		SET_COUNTRY_LIST(state, countryList) {
			state.countryList = countryList;
		},
		SET_COUNTRY_INPUT(state, countryInput) {
			state.countryInput = countryInput;
		},
	},
	actions: {
		setCountryList({ commit }, countryList) {
			commit("SET_COUNTRY_LIST", countryList);
		},
		setCountryInput({ commit }, countryInput) {
			commit("SET_COUNTRY_INPUT", countryInput);
		},
	},
	modules: {},
});
