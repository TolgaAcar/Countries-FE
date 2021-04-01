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
    border-radius: $border-radius;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 25px;
    height: 400px;
    width: 304px;
    transition: 0.1s ease-in-out;

    &:hover {
        transform: scale(1.03);
    }

    img {
        width: 100%;
        height: 50%;
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
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
