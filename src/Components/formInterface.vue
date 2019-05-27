<template lang="html">
  <form class="form" @submit="submitForm" :class="formClass">
    <div class="form__processing" v-if="processing">
      <slot name="processing">Sending ...</slot>
    </div>
    <div class="form__title" v-if="title">{{title}}</div>
    <slot name="desc_before"></slot>
    <div class="form__body">
      <slot></slot>
    </div>
    <div class="form__errors" v-if="Array.isArray(totalErrors) && totalErrors.length > 0">
      <ul>
        <li v-for="err in totalErrors">{{err}}</li>
      </ul>
    </div>
    <slot name="desc_after"></slot>
    <div class="form__buttons">
      <button
        type="button"
        v-for="button in buttons"
        :class="[buttonsClass, button.code, button.className, (button.def === true ? (button.className ? button.className + '--def' : 'def') : null)]"
        :disabled="processing === true"
        @click="buttonClick(button.event, $event)">{{button.name}}</button>
    </div>
  </form>
</template>

<script>
  import FormButton from './../FormButton'
  import formFieldBus from './../formFieldBus'

  export default {
    name: 'FormInterface',
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      },
      buttons: {
        type: Array,
        required: false,
        default: function () {
          return [
            new FormButton('save', 'Сохранить', null, true),
            new FormButton('apply', 'Применить'),
            new FormButton('cancel', 'Отмена')
          ]
        }
      },
      buttonsClass: {
        type: String,
        required: false,
        default: ''
      },
      data: {
        type: Object,
        required: false,
        default: function () {
          return null
        }
      },
      errors: {
        type: Object,
        required: false,
        default: function () {
          return {}
        }
      },
      processing: {
        type: Boolean,
        required: false,
        default: function () {
          return false
        }
      },
      debug: {
        type: Boolean,
        required: false,
        default: function () {
          return false
        }
      }
    },
    data: function () {
      return {
        errCodes: [],
        totalErrors: []
      }
    },
    mounted: function () {
      let nodes = this.$slots.default
      let errCodes = []
      console.warn('vue-form-ui => debug=', this.debug)
      if (this.debug === true) {
        console.debug('vue-form-ui => FormInterface nodes=', nodes)
      }
      Object.keys(nodes).map(function (key) {
        let node = nodes[key]
        if (typeof node.componentOptions === 'object' && typeof node.componentOptions.tag !== 'undefined') {
          if (['form-view', 'form-checkbox', 'form-input', 'form-text', 'form-select'].indexOf(node.componentOptions.tag) > -1 && typeof node.componentOptions.propsData === 'object' && typeof node.componentOptions.propsData.errorCode === 'string') {
            errCodes.push(node.componentOptions.propsData.errorCode)
          }
        }
      })
      this.$set(this, 'errCodes', errCodes)
      if (this.debug === true) {
        console.debug('vue-form-ui => FormInterface, errCodes=', errCodes)
      }

      this.$watch('errors', ($errors, $oldErrors) => {
        if (this.debug === true) {
          console.debug('vue-form-ui => FormInterface, watch errors=', $errors, 'old errors=', $oldErrors)
        }
        if ($errors === null) {
          this.totalErrors = []
          formFieldBus.$emit('errors', [])
          formFieldBus.$emit('clear-errors', [])
          return
        }
        if (Array.isArray($errors)) {
          if (this.debug === true) {
            console.debug('vue-form-ui => FormInterface, watch errors is array')
          }
          formFieldBus.$emit('errors', $errors)
          this.totalErrors = $errors
        } else if ($errors && typeof $errors === 'object') {
          if (this.debug === true) {
            console.debug('vue-form-ui => FormInterface, watch errors is object')
          }
          let totalErrors = []
          Object.keys($errors).map((key) => {
            if (this.errCodes.indexOf(key) === -1) {
              // not found field with this err code
              totalErrors.push($errors[key])
              if (this.debug === true) {
                console.debug('vue-form-ui => FormInterface => watch errors, add to TOTAL errors:', $errors[key])
              }
            } else {
              // has field
              if (Array.isArray($errors[key])) {
                $errors[key].forEach(($err) => {
                  formFieldBus.$emit('error', key, $err)
                  if (this.debug === true) {
                    console.debug('vue-form-ui => FormInterface => watch errors, emmit error: key=', key, 'err=', $err)
                  }
                })
              } else if (typeof $errors[key] === 'string') {
                formFieldBus.$emit('error', key, $errors[key])
                if (this.debug === true) {
                  console.debug('vue-form-ui => FormInterface => watch errors, emmit errors as string', 'key=', key, 'err=', $errors[key])
                }
              }
            }
          })
          this.totalErrors = totalErrors
        }
      }, {
        deep: true
      })
    },
    methods: {
      submitForm: function ($event) {
        $event.preventDefault()
        $event.stopPropagation()
        if (this.debug === true) {
          console.debug('vue-form-ui => FormInterface => submitForm')
        }
        this.buttons.forEach($button => {
          if ($button.def === true) {
            this.$emit($button.event, this.data)
          }
        })
      },
      buttonClick: function ($ecode, $event) {
        $event.preventDefault()
        $event.stopPropagation()
        if (this.debug === true) {
          console.debug('vue-form-ui => FormInterface => buttonClick, code=', $ecode)
        }
        if (typeof $ecode === 'string') {
          this.$emit($ecode, this.data)
        }
      }
    },
    computed: {
      formClass: function () {
        let classes = []
        if (Array.isArray(this.errors) && this.errors.length > 0) {
          classes.push('form--error')
        } else if (this.errors !== null && typeof this.errors === 'object' && Object.keys(this.errors).length > 0) {
          classes.push('form--error')
        }

        if (this.processing) {
          classes.push('form--processing')
        }

        if (this.success) {
          classes.push('form--success')
        }
        return classes.join(' ')
      }
    },
    watch: {
      processing: function ($processing) {
        formFieldBus.$emit('form-interface-processing', $processing)
      }
    }
  }
</script>
