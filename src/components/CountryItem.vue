<template>
    <div class="country">
        <img :src="country.flag" />
        <div class="details">
            <div class="name">{{ country.name }}</div>
            <div class="population">
                Population: <span>{{ formattedPopulation }}</span>
            </div>
            <div class="region">
                Region: <span>{{ country.region }}</span>
            </div>
            <div class="capital">
                Capital: <span>{{ country.capital }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountryList",
    data() {
        return {};
    },
    props: {
        country: {},
    },
    methods: {},
    computed: {
        formattedPopulation() {
            return this.country.population.toLocaleString();
        },
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
.country {
    background: $dark-blue;
    border-collapse: collapse;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px;
    height: 400px;
    width: 304px;

    img {
        width: 100%;
        height: 50%;
        border-radius: 4px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    .details {
        margin: 20px;
        font-weight: 600;

        div {
            margin-bottom: 7px;
        }

        .name {
            font-size: 18px;
            margin-bottom: 15px;
        }

        span {
            margin-left: 5px;
            font-weight: 300;
        }
    }
}
</style>
