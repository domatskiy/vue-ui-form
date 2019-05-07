import formFieldBus from './../formFieldBus'

export default {
  name: 'FormFieldMixin',
  props: {
    id: {
      type: String,
      default: ''
    },
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
    required: {
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
  data: function () {
    return {
      focus_active: 0,
      zzzz: [],
      processing: false
    }
  },
  methods: {
    setActive: function (active) {
      this.focus_active = active
    }
  },
  created: function () {
    formFieldBus.$on('form-interface-processing', ($processing) => {
      // console.log('form-interface-processing', $processing)
      this.processing = $processing
    })

    formFieldBus.$on('errors', ($errors) => {
      // clear errors
      console.error('field >>> errors - set []')
      this.$set(this, 'zzzz', [])
    })

    formFieldBus.$on('clear-errors', ($errors) => {
      // clear errors
      console.error('field >>> clear-errors - set []')
      this.$set(this, 'zzzz', [])
    })

    formFieldBus.$on('error', ($field, $error) => {
      if (this.errorCode && $field === this.errorCode) {
        let er = Array.isArray($error) ? $error : ($error ? [$error] : [])
        this.$set(this, 'zzzz', er)
      }
    })

    if (this.$el && typeof this.$el.tagName !== 'undefined') {
      let label
      // search label only for input and textarea
      let input = this.$el.querySelector('input')
      if (input) {
        label = this.$el.querySelector('label')
      } else {
        let textarea = this.$el.querySelector('textarea')
        if (textarea) {
          label = this.$el.querySelector('label')
        }
      }

      if (label) {
        label.addEventListener('click', () => {
          input.focus()
        })
      }
    }
  },
  computed: {
    errors: function () {
      let err = []

      if (typeof this.error === 'string' && this.error) {
        err.push(this.error)
      } else if (Array.isArray(this.error)) {
        this.error.forEach((e) => {
          err.push(e)
        })
      }

      if (this.errorCode) {
        if (Array.isArray(this.zzzz)) {
          this.zzzz.forEach((e) => {
            err.push(e)
          })
        } else if (this.zzzz) {
          err.push(this.zzzz)
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
  }
}
