<template>
    <div id="app">
        <form-interface
			title="DEMO form"
			:data="formData"
			:errors="formErrors"
			:processing="formProcessing"
			@save="saveForm"
			@apply="applyForm"
			@cancel="cancelForm">

			<form-view title="id" v-model="formData.id"></form-view>
			<form-checkbox title="active" v-model="formData.active"></form-checkbox>
			<form-input title="name" v-model="formData.name" :error="formErrors.name"></form-input>
			<form-input title="sort" v-model="formData.sort" :error="formErrors.sort"></form-input>
			<form-text title="name" v-model="formData.name" :error="formErrors.name"></form-text>

			<form-select title="select one" v-model="formData.selectOne" :list="opt" :error="formErrors.selectOne"></form-select>
			<form-select title="select two" v-model="formData.selectTwo" :list="opt" :error="formErrors.selectTwo"></form-select>
			<form-select title="select multi" v-model="formData.selectMulti" :list="opt" :multi="true"></form-select>

			<form-file title="new images" v-model="formData.image" :error="formErrors.image"></form-file>
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
      this.formData.name = 'name changed'
      this.formData.sort = 500
      this.formData.selectTwo = 2
      this.formData.image_view.push('https://w-dog.ru/wallpapers/1/35/478019719227899/zhivotnyx-leopard.jpg')

      console.log('applyChanges err 1')
      this.formErrors.active = 'error active'
      this.formErrors.sort = 'error sort'
      this.formErrors.name = 'error name'
      console.log('applyChanges err 2')
      this.formErrors.selectOne = 'error selectOne'
      this.formErrors.selectTwo = 'err 2'
      this.formErrors.image = 'error image'
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
