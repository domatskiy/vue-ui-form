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

			<form-view title="id" v-model="formData.id" prefix="#" postfix="ps">
				<div slot="label-hint">help for id</div>
				<div slot="hint">help for id</div>
			</form-view>
			<form-view title="free" prefix="#" postfix="ps">
				default slot data
			</form-view>
			<form-checkbox title="active" v-model="formData.active" error-code="active"></form-checkbox>
			<form-input
        id="nname"
        title="Full name"
				:key-up-change="true"
				:key-up-change-delay="300"
				v-model="formData.name"
        error-code="name">
				<div slot="label-hint">help info</div>
				<div slot="hint">name of ...</div>
			</form-input>
			<form-text title="Text description" v-model="formData.text" error-code="field">
				<div slot="label-hint">help info</div>
				<div slot="hint">name of ...</div>
			</form-text>

			<form-select title="Select one" v-model="formData.selectOne" :list="opt" :search="true" error-code="selectOne">
				<div slot="label-hint">help select one</div>
				<div slot="hint">help of select one</div>
			</form-select>

			<form-select title="Select two" v-model="formData.selectTwo" :list="opt" :search="true" error-code="selectTwo" :required="false"></form-select>

			<form-select title="Select multi" v-model="formData.selectMulti" :list="opt" :search="true" :multi="true" error-code="selectMulti"></form-select>
      <form-select title="Select multi tagged" v-model="formData.selectMulti" :list="opt" :search="true" :tagged="true" :multi="true" error-code="selectMulti"></form-select>

      <!-- {{formData.file ? formData.file.name : ''}} -->

			<form-view title="new file">
				<form-file title="" v-model="formData.file" :fileName="true">
					<div slot="label-hint">please select one file</div>
					<div slot="hint">select one file</div>
				</form-file>
			</form-view>


			<form-view title="new files">
				<form-file
					v-model="formData.files"
					:fileName="true"
					:multiple="true">
				</form-file>
				<div slot="label-hint">help files info</div>
				<div slot="hint">files of ...</div>
			</form-view>

			<form-view title="new files with slot">
				<form-file
					v-model="formData.files"
					:fileName="true"
					:multiple="true">
					<template slot="file" slot-scope="item">
						key: {{ item.key }} <br>
						file: {{ typeof item.file }} <br>
						[name: {{ item.file.name }} size: {{ item.file.size }}b]
					</template>
				</form-file>
			</form-view>

			<form-view title="images">
				<form-view-images v-model="formData.image_view" @remove="removeImage"></form-view-images>
				<div slot="label-hint">help images info</div>
				<div slot="hint">images of ...</div>
			</form-view>

			<form-view title="images with slot">
				<form-view-images v-model="formData.image_view" @remove="removeImage">
					<template slot="image" slot-scope="item">
						key: {{ item.key }} <br>
						file: {{ item.file }}
					</template>
				</form-view-images>
			</form-view>

			<form-view title="files">
				<form-view-files
					v-model="formData.view_files" @remove="removeFile">
				</form-view-files>
			</form-view>

			<form-view title="files with slot">
				<form-view-files
					v-model="formData.view_files"
					@remove="removeFile">
					<template slot="file" slot-scope="item">
						key: {{ item.key }} <br>
						file: {{ item.file }}
					</template>
				</form-view-files>
			</form-view>

		</form-interface>
		<br>
		<br>
		<b>Form data:</b>
		<br>
		<pre>{{formData}}</pre>
		<br>
		<br>
		<br>
		<br>
		<br>
    </div>
</template>

<script>
import Vue from 'vue'
import FormUI from '../../dist/index'
Vue.use(FormUI)

// console.log('FormUI', FormUI)

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
          'https://w-dog.ru/wallpapers/1/35/478019719227899/zhivotnyx-leopard.jpg',
          'https://w-dog.ru/wallpapers/1/35/478019719227899/zhivotnyx-leopard.jpg'
        ],
        view_files: [
          'https://w-dog.ru/wallpapers/1/35/478019719227899/zhivotnyx-leopard.jpg',
          'https://w-dog.ru/wallpapers/1/35/478019719227899/zhivotnyx-leopards.jpg'
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
        this.formErrors.other = 'other error'

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
