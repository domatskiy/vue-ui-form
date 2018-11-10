import FormInterface from './Components/FormInterface.vue'
import FormView from './Components/FormView.vue'
import FormInput from './Components/FormInput.vue'
import FormSelect from './Components/FormSelect.vue'
import FormText from './Components/FormText.vue'
import FormCheckbox from './Components/FormCheckbox.vue'

import FormFile from './Components/FormFile.vue'
import FormViewFiles from './Components/FormViewFiles.vue'
import FormViewImages from './Components/FormViewImages.vue'

// const FormUI = {}

/* if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(FormUI)
} */

export default {
  install: function (VueInstance, options) {
    const components = [
      FormInterface,
      FormView,
      FormInput,
      FormSelect,
      FormText,
      FormCheckbox,
      FormFile,
      FormViewFiles,
      FormViewImages
    ]

    components.map(component => {
      VueInstance.component(component.name, component)
    })
  }
}
