<template>
    <div class="header">
        <div class="header__title">Where in the world?</div>
    </div>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
    background: $dark-blue;
    color: $white;
    font-weight: 800;
    height: 60px;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 20px 40px;
}
</style>
