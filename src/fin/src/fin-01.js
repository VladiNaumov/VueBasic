Vue.createApp({
    // имя метода data() - здесь хранятся данные 
    data(){

        return {
            title: 'Tehtävä 2 Present verbityyppi 1' ,
            placeholderString: 'vastauksesi' ,
            notes: ['a', 'b'],

            inputValue_a: '',
            inputValue_b: '',
            
        }
    },

    methods:{

        ChangeHandler(event){
            this.inputValue_a = event.target.value
      
            
        },

        inputChangeHandler(event){
    
            this.inputValue_b = event.target.value
            
        },

        addNoteOne(){

            if(this.inputValue_a !=''){
                console.log('one', this.inputValue_a)
                this.notes.push(this.inputValue_a)
                
            }
            
            if(this.inputValue_b !=''){
                console.log('two', this.inputValue_b)
                this.notes.push(this.inputValue_b)
          
            }
           
          
            this.inputValue_a = ''
            this.inputValue_b = ''
        },

    }
	
}).mount('#app');

