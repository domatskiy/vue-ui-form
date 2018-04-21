<template>
    <div id="app">
        <form-interface
			:title="form-interface DEMO"
			:data="formData"
			:errors="formErrors"
			:processing="formProcessing"
			@save="saveForm" 
			@apply="applyForm"
			@cancel="cancelForm">
			<inout v-model="formData.name">
		</form-interface>
    </div>
</template>

<script>
    import Vue from 'vue'
    import FormInterface from 'plugin'

    Vue.use(FormInterface)

    export default {
      name: 'app',
      components: { Form },
      data () {
        return {
     	  formData: {
			name: 'test'
		  },
	      formErrors: {},
	      formProcessing: {}
        }
      },
      methods: {
        saveForm: function ($data) {
		  console.info('saveForm', $data)
		},
		applyForm: function ($data) {
		  console.info('applyForm', $data)
		}
		cancelForm: function ($data) {
		  console.info('cancelForm', $data)
		}
      }
    }
</script>