<template>
    <div class="country-list">
        <country-item
            v-for="(country, index) in filteredCountryList"
            :country="country"
            :key="index"
        ></country-item>
    </div>
</template>

<script>
import api from "@/module/api/api";
import CountryItem from "./components/CountryItem.vue";

export default {
    components: { CountryItem },
    name: "CountryList",
    data() {
        return {
            countryList: [],
            all: "all",
        };
    },
    computed: {
        filteredCountryList() {
            return this.filterCountryList(this.$store.state.countryInput);
        },
    },
    methods: {
        async fetchCountryList() {
            this.countryList = await api.fetchData(this.all);
            this.$store.dispatch("setCountryList", this.countryList);
        },
        filterCountryList(keyword) {
            return this.countryList.filter((country) => {
                return country.name
                    .toLowerCase()
                    .includes(keyword.toLowerCase());
            });
        },
    },
    created() {
        this.fetchCountryList();
    },
};
</script>

<style lang="scss" scoped>
.country-list {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 30px;
    justify-content: center;

    & div {
        margin: 25px;
    }
}
</style>
