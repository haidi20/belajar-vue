import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'



Vue.use(Vuetify, {
  	iconfont: 'md',
  	theme:{
      primary: '#673ab7',
      secondary: '#3f51b5',
      accent: '#9c27b0',
      error: '#f44336',
      warning: '#FDD835',
      info: '#00bcd4',
      success: '#4caf50'
    }
})
