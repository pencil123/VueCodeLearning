<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <h4>{{name}}</h4>
    </div>
</template>

<script>
    export default {
        name: "APP",
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