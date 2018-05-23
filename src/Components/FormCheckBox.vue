<template>
    <div class="form__group form__group--checkbox">
        <label v-if="title"><span>{{title}}</span></label>
        <div @click="change" :class="checked === true ? 'checked' : 'no'"></div>
        <span class="form__group__errors" v-if="error">{{error}}</span>
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
    value: {
      default: 0
    },
    error: {
      default: ''
    }
  },
  data () {
    return {
      val: false
    }
  },
  methods: {
    change: function () {
      this.val = !this.val
      this.$emit('input', this.val ? 1 : 0)
    }
  },
  mounted: function () {
    this.val = this.value
    this.$watch('value', function (v) {
      this.val = this.value
    })
  },
  computed: {
    checked () {
      return this.val === 1 || this.val === '1' || this.val === true || this.val === 'true'
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