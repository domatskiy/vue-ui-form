<template>
    <div id="app">
        <form-interface
			title="form-interface DEMO"
			:data="formData"
			:errors="formErrors"
			:processing="formProcessing"
			@save="saveForm" 
			@apply="applyForm"
			@cancel="cancelForm">

			<form-view title="id" v-model="formData.id"></form-view>
			<form-checkbox title="active" v-model="formData.active"></form-checkbox>
			<form-input title="name" v-model="formData.name"></form-input>
			<form-text title="name" v-model="formData.name"></form-text>
			<form-file title="image" v-model="formData.image"></form-file>
			<form-view-files title="image" v-model="formData.image_view"></form-view-files>

		</form-interface>
		<br><br>
		{{formData}}
		{{formData}}
    </div>
</template>

<script>
    import Vue from 'vue'
    import FormUI from 'plugin'
    Vue.use(FormUI)

    export default {
      name: 'app',
      components: {},
      data () {
        return {
     	  formData: {
			id: 1,
			active: 1,
			name: 'test',
            image: null,
            image_view: null
		  },
	      formErrors: {},
	      formProcessing: false
        }
      },
      methods: {
        saveForm: function ($data) {
		  console.info('saveForm', $data)
		},
		applyForm: function ($data) {
		  console.info('applyForm:', $data)
		},
		cancelForm: function ($data) {
		  console.info('cancelForm', $data)
		}
      }
    }
</script>
<style lang="less">
  .form {

    max-width: 700px;
	background-color: #ececec;
	padding: 15px 15px;

	&--error{}
	&--processing{}
	&--success{}

	&__title{
	  padding-bottom: 15px;
	  font-size: 24px;
	}

	&__body{
	  padding-bottom: 15px;
	}

	&__errors{
	  padding-bottom: 15px;
	}

	&__buttons{}
  }

  .form__group {
     padding-bottom: 10px;
     margin-bottom: 10px;
     border-bottom: 1px solid #aaa;

     label {}
     input {
	   display: inline-block;
       width: 100%;
	 }

    &--checkbox{
      input{
        width: auto !important;
      }
    }

    &--file {

    }
  }
</style>