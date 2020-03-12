// 1.使用commonjs的模块化规范
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);


import Vue from 'vue'
import App from './vue/App.vue'

new Vue(({
    el: '#app',
    data:{
        name : "hello World"
    },components :{
        App
    },template: '<App/>'
}))



// 3.依赖css文件
require('./css/normal.css')