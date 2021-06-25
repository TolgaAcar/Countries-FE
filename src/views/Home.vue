<template>
    <div class="home-wrapper">
        <div v-show="!isLoading" class="home">
            <filters></filters>
            <country-list></country-list>
        </div>
        <loading v-show="isLoading"></loading>
    </div>
</template>

<script>
import CountryList from "../components/CountryList/CountryList.vue";
import Filters from "../components/Filters/Filters.vue";
import Loading from "../components/Loading/Loading.vue";

export default {
    name: "Home",
    components: { Filters, CountryList, Loading },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>