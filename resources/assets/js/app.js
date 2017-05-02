
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
//
// window.Vue = require('vue');
//
// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */
// Vue.component('sensor', require('./components/Sensor.vue'));
//
// const app = new Vue({
//     el: '#app',
//     data:{
//
//     }
// });

window.onload = function() {

    function initGauge() {
        let gauge1 = loadLiquidFillGauge("fillgauge1", 30);
        let config1 = liquidFillGaugeDefaultSettings();
        config1.circleColor = "#fff973";
        config1.textColor = "#ffc360";
        config1.waveTextColor = "#e7ff29";
        config1.waveColor = "#fbffca";
        config1.circleThickness = 0.2;
        config1.textVertPosition = 0.2;
        config1.waveAnimateTime = 1000;

        function NewValue(){
            if(Math.random() > .5){
                return Math.round(Math.random()*100);
            } else {
                return (Math.random()*100).toFixed(1);
            }
        }

        console.log('asdfasdf');
    }

    initGauge();

    console.log('asdfasdf');console.log('asdfasdf');

};

