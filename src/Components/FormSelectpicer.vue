<template lang="html">
    <div class="form__group form__group--select" :class="className">
        <label><span>{{title}}</span></label>
        <selectpicker
            :value="spVal"
            :list="list"
            :multi="multi"
            :search="search"
            :placeholder="placeholder"
            :searchPlaceholder="searchPlaceholder"
            v-model="spVal">
        </selectpicker>
        <span class="form__group__errors">{{error}}</span>
    </div>
</template>

<script>
import selectpicker from 'vue-selectpicker/src/selectPicker.vue'

export default {
  name: 'FormSelectpicker',
  components: {selectpicker},
  props: {
    required: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    title: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Выбор значения'
    },
    value: {
      required: false,
      default: ''
    },
    multi: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    search: {
      type: Boolean,
      required: false,
      default: false
    },
    searchPlaceholder: {
      type: String,
      required: false,
      default: 'Поиск'
    },
    list: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    data: {
      type: Array,
      required: false,
      default: function () {
        return []
      }
    },
    buttons: {
      type: Boolean,
      required: false,
      default: false
    },
    error: {
      default: ''
    }
  },
  data () {
    return {
      spVal: null
    }
  },
  created: function () {
    if (this.multi === true) {
      this.spVal = Object.values(this.value)
    } else {
      this.spVal = parseInt(this.value)
    }
  },
  mounted: function () {
    this.$watch('spVal', ($newValue) => {
      this.$emit('input', $newValue)
    })
  },
  computed: {
    className () {
      let cl = []
      if (this.focus_active || (this.value !== null && this.value.length > 0)) {
        cl.push('form__group--active')
      }
      if (this.error) {
        cl.push('form__group--error')
      }
      return cl
    },
    val () {
      let val = this.value
      if (val === undefined || val === null) {
        val = ''
      }
      return val
    }
  }
}
</script>
