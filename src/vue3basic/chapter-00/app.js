Vue.createApp({

data:() => ({

     // имя метода data() - обязательно (здесь хранятся данные )   
    placeholderString: 'введите название заметки' ,
    title: 'список заметок',
    inputValue: '',
    
    person:{
        firstName: ': Naumdeveloper',
        email: ' : naumdeveloper@ya.com',
        age: ' : 44'
    },

    people: [
        {name: 'Vladilen', budget: 4200},
        {name: 'Elena', budget: 3500},
        {name: 'Victoria', budget: 1700}
    ],
   

    notes: ["Omena", "Peruna"]
    
    }),


    // это метод для работы с данными
    methods:{

        inputChangeHandler(event){
            this.inputValue = event.target.value

        },
        addNewNote(){
             if(this.inputValue !==''){
                    this.notes.push(this.inputValue)
                    this.inputValue = ''
                }
                        
                        
        },
        removeNode(idx){
         this.notes.splice(idx, 1)
        }
        
    }

}).mount("#app")


