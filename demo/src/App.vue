<template>
    <div id="app">
        <form-interface
			title="DEMO form"
			:data="formData"
			:processing="formProcessing"
			:errors="formErrors"
			@save="saveForm"
			@apply="applyForm"
			@cancel="cancelForm">

			<form-view title="id" v-model="formData.id"></form-view>
			<form-checkbox title="active" v-model="formData.active" error-code="active"></form-checkbox>
			<form-input title="Full name" v-model="formData.name" error-code="name"></form-input>
			<form-input title="Sort sort" v-model="formData.sort" error-code="field"></form-input>
			<form-text title="Text description" v-model="formData.text" error-code="field"></form-text>

			<form-select title="Select one" v-model="formData.selectOne" :list="opt" error-code="selectOne"></form-select>
			<form-select title="Select two" v-model="formData.selectTwo" :list="opt" error-code="selectTwo"></form-select>
			<form-select title="Select multi" v-model="formData.selectMulti" :list="opt" :multi="true" error-code="selectMulti"></form-select>

			<form-file title="new images" v-model="formData.image"></form-file>
			<form-view-files title="images" v-model="formData.image_view"></form-view-files>

		</form-interface>
		<br>
		<br>
		<br>
		<br>
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
      opt: {
        1: 'test 1',
        2: 'test 2',
        3: 'test 3',
        4: 'test 4',
        10: 'test 10',
        32: 'test 32',
        'z': 'test z'
      },
      formData: {
        id: 1,
        active: 1,
        name: 'test',
        sort: 0,
        text: 'text',
        selectOne: 2,
        selectMulti: [3, 4],
        image: null,
        image_view: [
          'https://w-dog.ru/wallpapers/1/35/478019719227899/zhivotnyx-leopard.jpg'
        ]
      },
      formErrors: {},
      formProcessing: false
    }
  },
  methods: {
    saveForm: function ($data) {
      console.info('saveForm', $data)
      this.applyChanges()
    },
    applyForm: function ($data) {
      console.info('applyForm:', $data)
      this.applyChanges()
    },
    cancelForm: function ($data) {
      console.info('cancelForm', $data)
    },
    applyChanges: function ($e) {
      console.log('applyChanges 0')
      this.formData.name = 'name 2'
      this.formData.sort += 500
      this.formData.selectTwo = 2
      this.formData.image_view.push('https://w-dog.ru/wallpapers/1/35/478019719227899/zhivotnyx-leopard.jpg')

      console.log('applyChanges err 1')
      this.formErrors = {}
      this.formErrors.active = 'error active'
      this.formErrors.sort = 'error sort'
      this.formErrors.name = 'error name'

      console.log('applyChanges err 2')
      this.formErrors.selectOne = 'error selectOne'
      this.formErrors.selectTwo = 'err 2'
      this.formErrors.image = 'error image'

      // console.warn('this.formErrors', this.formErrors)

      // this.formProcessing = true
    }
  }
}
</script>
<style lang="less">
@import "./../../src/less/form__group";

  .form {

    max-width: 700px;
	background-color: #f1f1f1;
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
