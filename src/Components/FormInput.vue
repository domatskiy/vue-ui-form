<template>
    <div class="form__group" :class="className">
        <label>{{title}}</label>
        <input :type="type" v-on:focus="setActive(1)" v-on:blur="setActive(0)" :value="val" :name="name"/>
        <span class="form__group__errors">{{error}}</span>
    </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: ['title', 'type', 'value', 'name', 'error'],
  mounted: function () {
    let vm = this
    let input = this.$el.querySelector('input')

    input.addEventListener('change', function (e) {
      vm.$emit('input', input.value)
    })
  },
  watch: {},
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
        if (this.type === 'color') {
          val = '#ff0000'
        } else {
          val = ''
        }
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