<template>
    <div class="search-input">
        <input type="text" placeholder="Search for a country" />
    </div>
</template>

<script>
export default {
    name: "SearchInput",
};
</script>

<style lang="scss" scoped>
.search-input {
    input {
        padding: 12px 22px;
        box-sizing: border-box;
        border: none;
        color: $white;
        background-color: $dark-blue;
    }

    ::placeholder {
        color: $white;
        opacity: 1;
    }

    input:focus {
        outline: none !important;
    }
}
</style>
