<template>
    <div class="app">
        <Header></Header>
        <div class="input-dropdown">
            <search-input></search-input>
            <dropdown></dropdown>
        </div>
        <country-list></country-list>
    </div>
</template>

<script>
import CountryList from "./components/CountryList.vue";
import Dropdown from "./components/Dropdown.vue";
import Header from "./components/Header.vue";
import SearchInput from "./components/SearchInput.vue";

export default {
    name: "App",
    components: { Header, SearchInput, Dropdown, CountryList },
};
</script>

<style lang="scss">
.app {
    .input-dropdown {
        display: flex;
        justify-content: space-between;
        margin: 8px 40px;
    }
}
</style>
