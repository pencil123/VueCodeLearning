<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <h4>{{name}}</h4>
    <cpn></cpn>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue'
    export default {
        name: "APP",
        components: {Cpn},
        data(){
            return {
                message: "hello world",
                name: 'lyz'
            }
        }
    }
</script>

<style>
    .title{
        color: blue;
    }
</style>