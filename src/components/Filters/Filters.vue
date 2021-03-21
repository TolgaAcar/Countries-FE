<template>
    <div class="filters">
        <search-input></search-input>
        <dropdown></dropdown>
    </div>
</template>

<script>
import Dropdown from "./components/Dropdown.vue";
import SearchInput from "./components/SearchInput.vue";
export default {
    components: { Dropdown, SearchInput },
    name: "Filters",
};
</script>

<style lang="scss" scoped>
.filters {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 60px;
    margin: 40px 80px;
}
</style>
