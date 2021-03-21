<template>
    <div class="app">
        <Header></Header>
        <filters></filters>
        <country-list></country-list>
    </div>
</template>

<script>
import CountryList from "./components/CountryList/CountryList.vue";
import Header from "./components/Header/Header.vue";
import Filters from "./components/Filters/Filters.vue";

export default {
    name: "App",
    components: { Header, CountryList, Filters },
};
</script>

<style lang="scss">
.app {
    box-sizing: inherit;
}
</style>
