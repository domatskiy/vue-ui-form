<template lang="html">
    <div class="form__group form__group--select" :class="className">
        <label>{{title}}</label>
        <selectpicker
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
  name: 'FormSelect',
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
    console.info('created, value=', this.value)
    if (this.multi === true) {
      this.spVal = []
    }
  },
  mounted: function () {
    // let vm = this
    this.$watch('spVal', ($newValue) => {
      console.info('spVal', $newValue)
      this.$emit('input', $newValue)
    })
  },
  computed: {
    className () {
      let cl = ''
      if (this.error) {
        cl += ' form__group--error'
      }
      return cl
    },
    val () {
      let val = this.value
      if (val === undefined || val === null) {
        val = ''
      }
      console.log('computed val', val)
      return val
    }
  }
}
</script>

<style lang="less">
</style>