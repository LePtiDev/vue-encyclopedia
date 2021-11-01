
import "./scss/init.scss"
import EnButton from './components/actions/EnButton.vue'

export default{
    install(Vue, options){
        Vue.component("en-button", EnButton)
    }
}