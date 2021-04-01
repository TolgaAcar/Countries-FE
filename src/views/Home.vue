<template>
    <div class="home">
        <filters></filters>
        <country-list></country-list>
    </div>
</template>

<script>
import CountryList from "../components/CountryList/CountryList.vue";
import Filters from "../components/Filters/Filters.vue";

export default {
    name: "Home",
    components: { Filters, CountryList },
};
</script>

<style lang="scss" scoped>
</style>