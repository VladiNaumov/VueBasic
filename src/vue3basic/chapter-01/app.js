const App = {
    // имя метода data() - здесь хранятся данные 
    data(){

        return {
            counter: 0,
            title: 'Счетчик (Counter)'

        }
    }
}

Vue.createApp(App).mount('#app')

// реализация счетчик по нажатию клавиши