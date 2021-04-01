<template>
    <div class="country-list">
        <div
            class="country-item-wrapper"
            v-for="(country, index) in filteredCountryList"
            :key="index"
        >
            <router-link
                :to="{
                    name: 'Details',
                    params: { name: country.name },
                }"
            >
                <country-item :country="country"></country-item>
            </router-link>
        </div>
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
    justify-content: center;
}
</style>
