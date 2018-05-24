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
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      required: false,
      default: ''
    },
    type: {
      required: false,
      default: 'text'
    },
    error: {
      required: false,
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
  mounted: function () {
    let input = this.$el.querySelector('input')
    input.addEventListener('change', (e) => {
      this.$emit('input', input.value)
    })
  },
  computed: {
    className () {
      let cl = []
      if (this.focus_active || (this.value !== null && ((typeof this.value === 'number' && this.value > 0) ||  (typeof this.value === 'string' && this.value.length > 0)))) {
        cl.push('form__group--active')
      }
      if (this.error) {
        cl.push('form__group--error')
      }
      return cl
    },
    val () {
      console.log('this.value', this.value)
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