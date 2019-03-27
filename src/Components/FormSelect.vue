<template>
    <div class="form__field form__field--select" :class="className">
        <label v-if="title">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <selectpicker
              :list="list"
              :multi="multi"
              :tagged="tagged"
              :search="search"
              :required="required"
              v-model="tmpValue"
              placeholder="Выбор значения"
              searchPlaceholder="Поиск">
            </selectpicker>

            <div class="hint">
                <slot name="hint"></slot>
            </div>
            <span class="error" v-if="errors.length > 0">
                <div v-for="err in errors">{{err}}</div>
            </span>
        </div>
    </div>
</template>

<script>
import formFieldBus from './../formFieldBus'
import formFieldMixin from './FormFieldMixin'
import selectpicker from 'vue-selectpicker/src/Components/selectPicker.vue'

export default {
  name: 'FormSelect',
  mixins: [formFieldMixin],
  components: {selectpicker},
  props: {
    required: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    value: {},
    multi: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    tagged: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    search: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    list: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      open: false,
      searchText: '',
      tmpValue: []
    }
  },
  beforeMount: function () {
    this.tmpValue = this.value
  },
  mounted: function () {
    formFieldBus.$on('close', () => {
      console.log('close')
      this.close(false)
    })
  },
  methods: {
    setActive: function (active) {
      this.focus_active = active
    }
  },
  computed: {
    className () {
      let cl = []
      // console.log('className', this.focus_active, this.value)
      if (this.focus_active || (typeof this.value !== 'undefined' && this.value !== null && this.value)) {
        cl.push('form__field--active')
      }
      if (this.error) {
        cl.push('form__field--error')
      }
      return cl
    },
    val () {
      let val = this.value
      if (typeof val === 'undefined' || val === null) {
        val = ''
      }
      return val
    }
  },
  watch: {
    tmpValue: function () {
      this.$emit('input', this.tmpValue)
    },
    value: function (newValue) {
      this.$set(this, 'tmpValue', newValue)
    }
  }
}
</script>
