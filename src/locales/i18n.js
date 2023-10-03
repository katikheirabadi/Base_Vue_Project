import {createI18n} from 'vue-i18n'

const messages = {
    fa: {
      message: {
        title:'این پروژه خالی است'
       },
      
    },
    en: {
      message: {
        title:'This is empty project'
      }
    },
  }
  
  const i18n = new createI18n({
    locale: 'en',
    messages,
    
  })

  export default i18n