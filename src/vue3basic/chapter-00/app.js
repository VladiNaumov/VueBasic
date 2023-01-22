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
            if(this.inputValue !=='')
            {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
            
            
        },
        removeNode(idx){
            this.notes.splice(idx, 1)
        }
        
    }
}

Vue.createApp(App).mount('#app')

