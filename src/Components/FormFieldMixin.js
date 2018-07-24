import formFieldBus from './../formFieldBus'

export default {
  name: 'FormFieldMixin',
  props: {
    title: {
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
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      focus_active: 0,
      processing: false
    }
  },
  methods: {
    setActive: function (active) {
      this.focus_active = active
    }
  },
  computed: {
    className () {
      let cl = []
      let hasVal = false

      if (this.focus_active) {
        hasVal = true
      }

      if (this.value !== null) {
        console.log('this.value', typeof this.value, this.value)
        if (typeof this.value === 'number' && this.value > 0) {
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
      console.warn('form errors', $errors)
    })
    formFieldBus.$on('error', ($field, $error) => {
      console.warn('field error', $field, $error)
    })
  }
}
