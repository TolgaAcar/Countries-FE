<template>
    <div class="dropdown-wrapper">
        <select class="regions-dropdown" v-model="selectedRegion">
            <option
                v-for="region in regionList"
                :value="region.val"
                :key="region.id"
            >
                {{ region.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "Dropdown",
    data() {
        return {
            selectedRegion: "all",
            regionList: [
                { id: 0, val: "all", name: "All Regions" },
                { id: 1, val: "africa", name: "Africa" },
                { id: 2, val: "americas", name: "America" },
                { id: 3, val: "asia", name: "Asia" },
                { id: 4, val: "europe", name: "Europe" },
                { id: 5, val: "oceania", name: "Oceania" },
            ],
        };
    },
    watch: {
        selectedRegion: function (val) {
            this.$store.dispatch("setRegion", val);
        },
    },
};
</script>

<style lang="scss" scoped>
.dropdown-wrapper {
    margin-top: $space;

    .regions-dropdown {
        border: unset;
        border-radius: $border-radius;
        padding: 12px 22px;
        outline: none;
        color: $white;
        background-color: $dark-blue;
        width: 200px;
        height: 60px;
    }
}
</style>
