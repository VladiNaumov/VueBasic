const App = {
    // имя метода data() - обязательно
    data(){

        return {
            counter: 0,
            title: 'Счетчик (Counter)'

        }
    }
}

Vue.createApp(App).mount('#app')