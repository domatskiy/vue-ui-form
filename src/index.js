const formIntarfasePlugin = {
  install (VueInstance, options) {
    VueInstance.component('form-interface', require('./Components/Form.vue'))
    VueInstance.component('form-view', require('./Components/FormView.vue'))
    VueInstance.component('form-input', require('./Components/FormInput.vue'))
    VueInstance.component('form-text', require('./Components/FormText.vue'))
    VueInstance.component('form-checkbox', require('./Components/FormCheckBox.vue'))
    VueInstance.component('form-file', require('./Components/FormFile.vue'))
    VueInstance.component('form-view-file', require('./Components/FormViewFiles.vue'))
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(formIntarfasePlugin)
}

export default formIntarfasePlugin
