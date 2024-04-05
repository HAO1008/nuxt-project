<template>
    <div class="header__inner">
        <h1>{{ testStore.count }}</h1>
        <h2>{{ testStore.doubleCount }}</h2>
        <img src="~/assets/image/logo.png" alt="">
        <ul>
            <li v-for="list in routerList" :key="list.id" @click="test()">
                <NuxtLink :to="list.path">{{ list.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useTestStore } from '@/store/useTest.js';
const testStore = useTestStore();
const routerList = ref([
    {id: 1, name: 'Index', path: '/'},
    {id: 2, name: 'About', path: '/about'},
])
function test() {
    testStore.add();
}
</script>

<style lang="scss">
.header__inner {
    background-color: $black;
    color: $white;
}
</style>