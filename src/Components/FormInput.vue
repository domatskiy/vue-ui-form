<template>
    <div class="form__group form__group--text" :class="className">
        <label v-if="title"><span v-html="title"></span></label>
        <div>
            <input
                :type="type"
                :disabled="disabled"
                v-on:focus="setActive(1)"
                v-on:blur="setActive(0)"
                :value="val"/>
        </div>
        <span class="form__group-error" v-if="errors.length > 0">
            <div v-for="err in errors">{{err}}</div>
        </span>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormInput',
  mixins: [formFieldMixin],
  props: {
    type: {
      required: false,
      default: 'text'
    }
  },
  mounted: function () {
    let input = this.$el.querySelector('input')
    input.addEventListener('change', (e) => {
      this.$emit('input', input.value)
    })
  },
  computed: {
    val () {
      let val = this.value
      if (typeof val === 'undefined' || val === null) {
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