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
        selectedRegion() {
            return this.$store.state.region;
        },
    },
    watch: {
        selectedRegion: function (val) {
            let query = "";

            if (val === "" || val === "all") {
                query = this.all;
            } else {
                query = `region/${val}`;
            }

            this.fetchCountryList(query);
        },
    },
    methods: {
        async fetchCountryList(query) {
            this.countryList = await api.fetchData(query);
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
        this.fetchCountryList(this.all);
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
