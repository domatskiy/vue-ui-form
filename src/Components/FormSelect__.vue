<template>
    <div class="form__group form__group--select" :class="className">
        <label>{{title}}</label>
        <select :value="value">
            <option v-if="required === false"></option>
            <option v-for="item in list" :value="item.id" :selected="item.id == value" :style="item.color ? 'color:' + item.color : ''">{{item.name}}</option>
        </select>
        <span class="form__group__errors">{{error}}</span>
    </div>
</template>

<script>
export default {
  name: 'SelectPicker',
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
    list: {
      type: Array
    },
    value: {
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  mounted: function () {
    let vm = this
    let select = this.$el.querySelector('select')
    select.addEventListener('change', function (e) {
      vm.$emit('input', select.value)
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
    .form__group{
        input[type=color]{
            width: 50px;
            padding: 0;
        }
    }
</style>