# Vue.js in Basic

### Src/vue3basic

- chapter-01: реализация счетчик по нажатию клавиши

- chapter-02: вывод сообщений из массива с помощью цикла v-for, реализовано добавление заметки по клавиши ENTER

- chapter-03: добавлено удаление элементов

- chapter-04: добавлено чтение данных с объекта

- chapter-05: работа с виртуальным  DOM

- chapter-06: мини проект


### Src/book: Book code Vue.js in Action

### Setup

/* когда зависимости не подгружены */
npm install 


/* интерактивно генерировать файл package.json с помощью команды */
npm init

/* установка parcel */
npm install parcel
npm install parcel-bundler

/* потом написать */

"scripts": {
    "serve": "parcel ./src/index.html -p 4200 --open",
    "build": "parcel build ./src/index.html --no-source-maps",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

 npm run serve
