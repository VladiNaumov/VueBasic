const App = {
    // имя метода data() - обязательно
    data(){

        return {
            placeholderString: 'введите название заметки' ,
            title: 'список заметок',
            inputValue: '',
            notes: ['a', 'b', 'c']

        }
    },
    methods:{
        iputChangeHandler(event){
            this.inputValue = event.target.value

        }
    }
}

Vue.createApp(App).mount('#app')

// введение в консоль сообщений, и вывод сообщений с массива 