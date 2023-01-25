const app = Vue.createApp({
    data() {
      return {
        title: 'Это из свойства template'
      }
    },

    template: `
        <div class="card center">
            <h1>{{ title }}</h1>
            <button class="btn" @click="title = 'Изменили!'">Изменить</button>
        </div>
     `,

    methods: {
      changeTitle() {
        console.log(this)
        this.title = 'Изменили!'
      }
    }
    
  })
  
  app.mount('#app')


  // работа с виртуальным  DOM он работает быстрее чем нативный DOM, это есть так называемая оптимизация (ускорение работы кода )

const h = Vue.h
Vue.createApp({
    data() {
      return {
        title: ' Это из свойства render '
      }
    },
    
    render() {
      return h('div', {
        class: 'card center'
      }, [
        h('h1', {}, this.title),
        h('button', {
          class: 'btn',
          onClick: this.changeTitle
        }, 'Изменить')
      ])
    },

    methods: {
        changeTitle() {
          console.log(this)
          this.title = 'Изменили!'
        }
      }

  }).mount('#app2')
 