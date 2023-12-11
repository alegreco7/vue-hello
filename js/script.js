const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Welcome to Vue.js',
            img: './img/logo.png'
        }
    },
}).mount('#app')