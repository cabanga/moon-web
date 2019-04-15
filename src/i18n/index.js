import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'pt': {
        titleDefaul: 'Plataforma 100% Angolana, para vagas de T.I.'
    },
    'en': {
        titleDefaul: '100% Angolan platform, for T.I.'
    }
}

const i18n = new VueI18n({
    locale: 'pt', // set locale
    messages // set locale messages
})

export default i18n
