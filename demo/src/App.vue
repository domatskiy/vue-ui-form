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
			<form-input title="name" v-model="formData.name"></form-input>
			<form-text title="name" v-model="formData.name"></form-text>

			<form-select title="select one" v-model="formData.selectOne" :list="opt"></form-select>

			{{formData.selectMulti}}
			<form-select title="select multi" v-model="formData.selectMulti" :multi="true" :list="opt"></form-select>

			<form-file title="image" v-model="formData.image"></form-file>
			<form-view-files title="image" v-model="formData.image_view"></form-view-files>

		</form-interface>
		<br><br>
		{{formData}}
    </div>
</template>

<script>
    import Vue from 'vue'
    import FormUI from 'plugin'
    Vue.use(FormUI)

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