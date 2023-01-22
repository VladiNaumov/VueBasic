const App = {
    // имя метода data() - обязательно
    data(){

        return {
            placeholderString: 'введите название заметки' ,
            title: 'список заметок',
            inputValue: '',
            notes: ['a', 'b']

        }
    },
    methods:{
        inputChangeHandler(event){
            this.inputValue = event.target.value

        },
        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        
    }
}

Vue.createApp(App).mount('#app')

// вывод сообщений из массива с помощью цикла FOR
// реализовано добавление заметки по enter 