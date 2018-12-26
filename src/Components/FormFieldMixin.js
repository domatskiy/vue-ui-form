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

      if (typeof this.value !== 'undefined' && this.value !== null) {
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
        cl.push('form__field--active')
      }

      if (this.disabled === true || this.processing === true) {
        cl.push('form__field--disabled')
      }

      if (this.errors.length > 0) {
        cl.push('form__field--error')
      }

      return cl
    }
  },
  created: function () {
    formFieldBus.$on('form-interface-processing', ($processing) => {
      this.processing = $processing
    })
    formFieldBus.$on('errors', ($errors) => {
      // clear errors
      this.errorEvent = []
    })
    formFieldBus.$on('clear-errors', ($errors) => {
      // clear errors
      this.errorEvent = []
    })
    formFieldBus.$on('error', ($field, $error) => {
      if (this.errorCode && $field === this.errorCode) {
        this.errorEvent = typeof $error === 'object' ? $error : [$error]
      }
    })
  },
  mounted: function () {
    if (typeof this.$el.tagName !== 'undefined' && this.$el) {
      let input = this.$el.querySelector('input')
      if (input) {
        let label = this.$el.querySelector('label')
        label.addEventListener('click', () => {
          input.focus()
        })
      }

      let textarea = this.$el.querySelector('textarea')
      if (textarea) {
        let label = this.$el.querySelector('label')
        label.addEventListener('click', () => {
          textarea.focus()
        })
      }
    }
  }
}
