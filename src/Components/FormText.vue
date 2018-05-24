<template>
    <div class="form__group form__group--text" :class="className">
        <label><span>{{title}}</span></label>
        <textarea v-on:focus="setActive(1)" v-on:blur="setActive(0)">{{val}}</textarea>
        <span class="form__group__errors" v-if="error">{{error}}</span>
    </div>
</template>

<script>
export default {
  name: 'FormText',
  props: ['title', 'value', 'name', 'error'],
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
  mounted: function () {
    let textarea = this.$el.querySelector('textarea')
    textarea.addEventListener('input', (e) => {
      this.$emit('input', textarea.value)
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

<style lang="less">
    .form__group{
        input[type=color]{
            width: 50px;
            padding: 0;
        }
    }
</style>