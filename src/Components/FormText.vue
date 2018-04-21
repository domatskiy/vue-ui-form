<template>
    <div class="form__group" :class="className">
        <label>{{title}}</label>
        <textarea :name="name">{{val}}</textarea>
        <span class="form__group__errors">{{error}}</span>
    </div>
</template>

<script>
export default {
  name: 'FormText',
  props: ['title', 'value', 'name', 'error'],
  mounted: function () {
    let vm = this
    let textarea = this.$el.querySelector('textarea')
    textarea.addEventListener('input', function (e) {
      vm.$emit('input', textarea.value)
    })
  },
  computed: {
    className () {
      let cl = ''
      if (this.active) {
        cl += 'form__group--active'
      }
      if (this.error) {
        cl += 'form__group--error'
      }
      return cl
    },
    val () {
      let val = this.value
      if (val === undefined || val === null) {
        val = ''
      }
      return val
    },
    active () {
      // console.log('computed active: ', this.value.length > 0,  this.focus_active);
      return this.focus_active || (this.value != null && this.value.length > 0)
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