import formFieldBus from './../formFieldBus'

export default {
  name: 'FormFieldMixin',
  props: {
    title: {
      type: String,
      default: ''
    },
    errorCode: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    value: {
      required: false
    },
    error: {
      required: false,
      default: ''
    }
  },
  data () {
    return {
      focus_active: 0,
      errorEvent: [],
      processing: false
    }
  },
  methods: {
    setActive: function (active) {
      this.focus_active = active
    }
  },
  computed: {
    errors: function () {
      let err = []
      if (this.error) {
        err.push(this.error)
      } else {
        if (Array.isArray(this.errorEvent)) {
          this.errorEvent.forEach((err) => {
            err.push(err)
          })
        } else if (typeof this.errorEvent === 'string') {
          err.push(this.errorEvent)
        }
      }
      return err
    },
    className () {
      let cl = []
      let hasVal = false

      if (this.focus_active) {
        hasVal = true
      }

      if (this.value !== null) {
        // console.log('this.value', typeof this.value, this.value)
        if (typeof this.value === 'number' && this.value !== null) {
          hasVal = true
        } else if (typeof this.value === 'string' && this.value.length > 0) {
          hasVal = true
        } else if (Array.isArray(this.value) && this.value.length > 0) {
          hasVal = true
        } else if (typeof this.value === 'object' && Object.values(this.value).length > 0) {
          hasVal = true
        }
      }

      if (hasVal === true) {
        cl.push('form__group--active')
      }

      if (this.disabled) {
        cl.push('form__group--disabled')
      }

      if (this.error) {
        cl.push('form__group--error')
      }

      return cl
    }
  },
  created: function () {
    formFieldBus.$on('form-interface-processing', ($processing) => {
      this.processing = $processing
    })
    formFieldBus.$on('errors', ($errors) => {
      // console.warn('form errors: ', $errors)
    })
    formFieldBus.$on('error', ($field, $error) => {
      if ($field === this.errorCode) {
        // console.warn('field error: ', $field, ', message=', $error, this)
        this.errorEvent = $error
      }
    })
  }
}
