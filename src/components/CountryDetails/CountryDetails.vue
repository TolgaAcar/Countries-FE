<template>
    <div class="country-details-wrapper">
        <div v-show="!isLoading" class="country-details">
            <img :src="country.flag" />
            <div class="country-text-details">
                <div class="name">{{ country.name }}</div>
                <div class="detailed-fields">
                    <div class="native-name">
                        Native name: <span>{{ country.nativeName }}</span>
                    </div>
                    <div class="population">
                        Population: <span>{{ formattedPopulation }}</span>
                    </div>
                    <div class="region">
                        Region: <span>{{ country.region }}</span>
                    </div>
                    <div class="sub-region">
                        Sub Region: <span>{{ country.subregion }}</span>
                    </div>
                    <div class="capital">
                        Capital: <span>{{ country.capital }}</span>
                    </div>
                    <div class="top-level-domain">
                        Top Level Domain:
                        <span
                            v-for="(domain, index) in country.topLevelDomain"
                            :key="index"
                            >{{ domain }}</span
                        >
                    </div>
                    <div class="currencies">
                        Currencies:
                        <span
                            v-for="(currency, index) in country.currencies"
                            :key="index"
                        >
                            {{ currency.name }}
                        </span>
                    </div>
                    <div class="languages">
                        Languages:
                        <span
                            v-for="(language, index) in country.languages"
                            :key="index"
                        >
                            {{ language.name }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <loading v-show="isLoading"></loading>
    </div>
</template>

<script>
import api from "@/module/api/api";
import { useRoute } from "vue-router";
import Loading from "../Loading/Loading.vue";

export default {
    components: { Loading },
    name: "CountryDetails",
    data() {
        return {
            country: {},
        };
    },
    computed: {
        formattedPopulation() {
            return (
                this.country &&
                this.country.population &&
                this.country.population.toLocaleString()
            );
        },
        isLoading() {
            return Object.keys(this.country).length === 0;
        },
    },
    beforeMount() {
        const route = useRoute();
        const countryName = route.params.name;
        this.fetchCountryDetails(countryName);
    },
    methods: {
        async fetchCountryDetails(query) {
            const response = await api.fetchData(`name/${query}`);
            this.country = response[0];
        },
    },
};
</script>

<style lang="scss" scoped>
.country-details {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: $space;

    img {
        width: 100%;
        max-width: 500px;
        height: auto;
        margin-right: 160px;
        margin-bottom: 80px;
    }

    .country-text-details {
        .name {
            font-weight: 800;
            font-size: 30px;
            margin-bottom: 30px;
        }

        .detailed-fields {
            div {
                margin-bottom: 20px;
                margin-right: 40px;
                font-weight: 600;

                span {
                    margin-left: 10px;
                    opacity: 0.6;
                }
            }
        }
    }
}
</style>