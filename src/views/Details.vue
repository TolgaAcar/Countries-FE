<template>
    <div class="details">
        <country-details></country-details>
    </div>
</template>

<script>
import CountryDetails from "../components/CountryDetails/CountryDetails.vue";

export default {
    name: "Details",
    components: { CountryDetails },
};
</script>

<style lang="scss" scoped>
</style>