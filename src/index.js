import FormInterface from './Components/FormInterface.vue'
import FormView from './Components/FormView.vue'
import FormInput from './Components/FormInput.vue'
import FormText from './Components/FormText.vue'
import FormCheckbox from './Components/FormCheckbox.vue'
import FormFile from './Components/FormFile.vue'
import FormViewFiles from './Components/FormViewFiles.vue'

const FormUI = {
  install (VueInstance, options) {
    console.log('FormUI install')

    const components = [
      FormInterface,
      FormView,
      FormInput,
      FormText,
      FormCheckbox,
      FormFile,
      FormViewFiles
    ]

    components.map(component => {
      console.log(component.name)
      VueInstance.component(component.name, component);
    })
  }
}


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FormUI)
}

export default FormUI
