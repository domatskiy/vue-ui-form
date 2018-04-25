<template>
    <div class="form__group form__group--checkbox form__group--active">
        <label>{{title}}</label>
        <input type="checkbox" :value="value" :name="name" :checked="checked"/>
    </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  props: ['title', 'type', 'value', 'name', 'error'],
  mounted: function () {
    let vm = this
    let input = this.$el.querySelector('input')
    input.addEventListener('change', function (e) {
      console.log('change', input.checked, input.value)
      vm.$emit('input', input.checked ? 1 : 0)
    })
  },
  computed: {
    checked () {
      return this.value === 1 || this.value === '1' || this.value === true || this.value === 'true'
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