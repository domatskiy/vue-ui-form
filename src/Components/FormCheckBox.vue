<template>
    <div class="form__group form__group--checkbox">
        <label><span>{{title}}</span></label>
        <div @click="change" :class="checked === true ? 'checked' : 'no'"></div>
        <span class="form__group__errors">{{error}}</span>
    </div>
</template>

<script>
export default {
  name: 'FormCheckbox',
  props: {
    title: {
      type: String,
      default: ''
    },
    error: {
      default: ''
    },
    value: {}
  },
  data () {
    return {
      val: false
    }
  },
  methods: {
    change: function () {
      this.val = !this.val
    }
  },
  mounted: function () {
    console.info('mounted this.value', this.value)
    this.val = this.value
  },
  computed: {
    checked () {
      return this.val === 1 || this.val === '1' || this.val === true || this.val === 'true'
    }
  },
  watch: {
    val: function () {
      this.$emit('input', this.val ? 1 : 0)
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