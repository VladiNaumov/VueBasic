const App = {
    // имя метода data() - обязательно (здесь хранятся данные )
    data(){

        return {
            placeholderString: 'введите название заметки' ,
            title: 'список заметок',
            inputValue: '',
            notes: ['a', 'b']

        }
    },
    // это метод для работы с данными
    methods:{
        inputChangeHandler(event){
            this.inputValue = event.target.value
            
        },
        addNewNote(){
            // добавление данных в массив notes
            if(this.inputValue !=''){
                this.notes.push(this.inputValue)
            }
           
            // очистка поля
            this.inputValue = ''
        }
        
    }
}

Vue.createApp(App).mount('#app')

// вывод сообщений из массива с помощью цикла v-for, реализовано добавление заметки по клавиши ENTER 