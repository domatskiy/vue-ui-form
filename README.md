## install

npm i vue-form-interface

## use

```html
<form-interface
    :title="Form DEMO"
    :data="formData"
    :errors="formErrors"
    :processing="formProcessing"
	@save="saveForm" 
	@apply="applyForm"
	@cancel="cancelForm"
	></form-interface>
```

example app

```js

import FormInterface from 'plugin/Components/Form'
Vue.component('form-interface', FormInterface)

export default {
  name: 'app',
  components: {},
  data () {
    return: {
	  formData: {
	    name: 'test'
	  },
	  formErrors: {},
	  formProcessing: {}
	}
  },
  methods: {
    saveForm: function ($map) {
      console.info('saveForm')
    },
	applyForm: function () {
	  console.info('applyForm')
	}
	cancelForm: function () {
	  console.info('cancelForm')
	}
  }
}
```

https://domatskiy.github.io/vue-selectpicker/