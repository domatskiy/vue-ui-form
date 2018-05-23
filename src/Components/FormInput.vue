<template>
    <div class="form__group form__group--text" :class="className">
        <label><span>{{title}}</span></label>
        <input :type="type" v-on:focus="setActive(1)" v-on:blur="setActive(0)" :value="val"/>
        <span class="form__group__errors" v-if="error">{{error}}</span>
    </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: ['title', 'type', 'value', 'error'],
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
    let input = this.$el.querySelector('input')
    input.addEventListener('change', (e) => {
      this.$emit('input', input.value)
    })
  },
  computed: {
    className () {
      let cl = ''
      if (this.focus_active || (this.value !== null && this.value.length > 0)) {
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
    }
  },
  watch: {}
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