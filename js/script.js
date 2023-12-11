const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Welcome to',
            img: './img/logo.png'
        }
    },
}).mount('#app')