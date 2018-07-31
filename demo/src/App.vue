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
			<form-text title="Text description" v-model="formData.text" error-code="field"></form-text>

			<form-select title="Select one" v-model="formData.selectOne" :list="opt" error-code="selectOne"></form-select>
			<form-select title="Select two" v-model="formData.selectTwo" :list="opt" error-code="selectTwo" :required="false"></form-select>
			<form-select title="Select multi" v-model="formData.selectMulti" :list="opt" :multi="true" error-code="selectMulti"></form-select>

			<form-file title="new file" v-model="formData.file" :fileName="true"></form-file>
			<form-file title="new files" v-model="formData.files" :multiple="true"></form-file>

			<form-view-images title="images" v-model="formData.image_view" @remove="removeImage"></form-view-images>
			<form-view-files title="files" v-model="formData.image_view" @remove="removeFile"></form-view-files>

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
        name: 'test name',
        sort: 0,
        text: 'text of description or simple text',
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
    removeImage: function (file) {
      console.log('removeImage', file)
	},
    removeFile: function (file) {
      console.log('removeFile', file)
	},
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

      this.formProcessing = true

      setTimeout(() => {
        this.formProcessing = false
        console.log('applyChanges err 1')
        this.formErrors = {}
        this.formErrors.active = 'error active'
        this.formErrors.sort = 'error sort'
        this.formErrors.name = 'error name'

        console.log('applyChanges err 2')
        this.formErrors.selectOne = 'error selectOne'
        this.formErrors.selectTwo = 'err 2'
        this.formErrors.image = 'error image'
      }, 2000)
    }
  }
}
</script>
<style lang="less">
/*
@import "./../../src/less/form__field-default";
@import "./../../src/less/form__field-material";
*/
@import "./../../src/less/form__field-default";
@import "./../../src/less/form";

  .form__group {
     label {}
     input {}

    &--checkbox{}

    &--file {}
  }
</style>
