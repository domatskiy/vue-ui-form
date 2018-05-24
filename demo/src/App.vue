<template>
    <div id="app">
        <form-interface
			title="form interface DEMO page"
			:data="formData"
			:errors="formErrors"
			:processing="formProcessing"
			@save="saveForm"
			@apply="applyForm"
			@cancel="cancelForm">

			<form-view title="id" v-model="formData.id"></form-view>
			<form-checkbox title="active" v-model="formData.active"></form-checkbox>
			<form-checkbox title="active" v-model="formData.active" :error="formErrors.active"></form-checkbox>
			<form-input title="name" v-model="formData.name" :error="formErrors.name"></form-input>
			<form-input title="sort" v-model="formData.sort" :error="formErrors.sort"></form-input>
			<form-text title="name" v-model="formData.name" :error="formErrors.name"></form-text>

			<form-select title="select one" v-model="formData.selectOne" :list="opt" :error="formErrors.selectOne"></form-select>
			<form-select title="select two" v-model="formData.selectTwo" :list="opt" :error="formErrors.selectTwo"></form-select>
			<form-select title="select multi" v-model="formData.selectMulti" :list="opt" :multi="true"></form-select>

			<form-file title="new images" v-model="formData.image" :error="formErrors.image"></form-file>
			<form-view-files title="images" v-model="formData.image_view"></form-view-files>

			<a @click="applyChanges">apply changes</a>
		</form-interface>
		<br><br>
		{{formData}}
    </div>
</template>

<script>
    import Vue from 'vue'
    import FormUI from 'plugin'
    Vue.use(FormUI)

    //require('./../../src/less/form__group.less')

    // import selectPicker from 'vue-selectpicker'
    // Vue.use(selectPicker)

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
		},
		applyForm: function ($data) {
		  console.info('applyForm:', $data)
		},
		cancelForm: function ($data) {
		  console.info('cancelForm', $data)
		},
        applyChanges: function ($e) {
          console.log('applyChanges')
          this.formData.name = 'name changed'
          this.formData.sort = 500
          this.formData.selectTwo = 2

          this.formErrors.active = 'error active'
          this.formErrors.sort = 'error sort'
          this.formErrors.name = 'error name'
          this.formErrors.selectOne = 'error selectOne'
          this.formErrors.selectTwo = 'err 2'
          this.formErrors.image = 'error image'

          $e.preventDefault()
		}
      }
    }
</script>
<style lang="less">
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