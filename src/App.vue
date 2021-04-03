<template>
    <div class="app">
        <router-link
            :to="{
                name: 'Home',
            }"
        >
            <Header></Header>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import store from "./store/index";
import Header from "./components/Header/Header.vue";

export default {
    name: "App",
    store,
    components: { Header },
};
</script>

<style lang="scss">
.app {
    box-sizing: inherit;
}
</style>
