import Vue from 'vue'

const formIntarfasePlugin = {
  install (VueInstance, options) {
    VueInstance.component('form-interface', require('./Components/Form.vue'))
    VueInstance.component('form-input', require('./Components/FormInput.vue'))
    VueInstance.component('form-view', require('./Components/FormView.vue'))
    VueInstance.component('form-view', require('./Components/FormView.vue'))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(formIntarfasePlugin)
}

export default formIntarfasePlugin
