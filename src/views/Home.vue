<template>
    <div class="home">
        <h1>HOME页</h1>
        <router-link :to="{name: 'index'}">INDEX</router-link>
    </div>
</template>
<style lang="less">
    .home {
        padding: 10px;
    }
</style>
<script>

    export default {
        name: 'home',
        components: {},
        data() {
            return {}
        },
        mounted() {
            console.log(this.$route.parmas)
        },
        methods: {

        }
    }
</script>
