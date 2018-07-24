
export default {
  name: 'FormFieldMixin',
  props: {
    title: {
      type: String,
      default: ''
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
      focus_active: 0
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
      if (this.focus_active || (this.value !== null && ((typeof this.value === 'number' && this.value > 0) || (typeof this.value === 'string' && this.value.length > 0)))) {
        cl.push('form__group--active')
      }
      if (this.error) {
        cl.push('form__group--error')
      }
      return cl
    }
  }
}
