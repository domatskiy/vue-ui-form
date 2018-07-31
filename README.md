## install

npm i vue-ui-form

## use

```html
<form-interface
    title="DEMO"
    :data="formData"
    :errors="formErrors"
    :processing="formProcessing"
    :buttons="buttons"
    :buttonsClass="btn"
    @save="saveForm" 
    @apply="applyForm"
    @cancel="cancelForm">
    
    <div slot="desc_before">description before form</div>
    <div slot="desc_after">description after form</div>
    <div slot="processing">Sending :)</div>
    
    <form-view title="id" v-model="formData.id"></form-view>
    <form-checkbox title="active" v-model="formData.active" error-сode="active"></form-checkbox>
    <form-input title="name" v-model="formData.name" error-сode="name"></form-input>
    <form-text title="description" v-model="formData.description" error-сode="description"></form-text>
    <form-file title="image" v-model="formData.image"></form-file>
    <form-view-file title="image" v-model="formData.image_view"></form-view-file>

</form-interface>
```

![форма](demo/screenshot/form-demo1.gif)

### form-interface properties
| Name   | Type  | Required | Default | Description |
| ------ |:-----:| :---------:| --------|:---------|
| title | String | false  |        | form title |
| buttons | Object | false  | Object |  |
| buttonsClass | String | false  |  |  |
| data | Object | false  | false | set default class for item |
| errors | Object | false  | false | set default class for item |
| processing | Boolean | false  | false | block form |

### form-<field code> properties
| Name   | Type  | Required | Default | Description |
| ------ |:-----:| :---------:| --------|:---------|
| title | String | false  |        | form title |
| error-сode | String | false  |  |  |
| disabled | Boolean | false  | false |  |
| error | Array | String | false  |  |  set error |


### example app

```js
import FormUi from 'vue-ui-form'
import FormButton from 'vue-ui-form//FormButton'
Vue.use(FormUi)
 
export default {
  name: 'app',
  components: {},
  data () {
    return {
      formData: {
      	id: 1,
      	active: 1,
      	name: 'test',
      	description: 'test',
        image: null,
        image_view: null
      },
      buttons: [
        new FormButton('save', 'Сохранить', null, true),
        new FormButton('apply', 'Применить'),
        new FormButton('cancel', 'Отмена')
      ],
      formErrors: {},
      formProcessing: false
    }
  },
  methods: {
    saveForm: function ($data) {
      console.info('saveForm', $data)
    },
    applyForm: function ($data) {
      console.info('applyForm', $data)
    },
    cancelForm: function ($data) {
      console.info('cancelForm', $data)
    }
  }
}
```

style

```less
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
```

https://domatskiy.github.io/vue-selectpicker/