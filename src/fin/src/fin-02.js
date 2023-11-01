Vue.createApp({
    // имя метода data() - здесь хранятся данные 
    data(){

        return {
            title: 'Tehtävä 3 Present verbityyppi 2' ,
            placeholderString: 'vastauksesi' ,
            inputValue: '',
            notes: ['a', 'b']
        }
    },

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
        },

    }
  
   
	
}).mount('#app');
