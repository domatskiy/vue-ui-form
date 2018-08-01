<template>
    <div class="form__field form__field--text" :class="className">
        <label v-if="title">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <textarea
                :disabled="disabled === true || processing === true"
                :style="{minHeight: minHeight + 'px'}"
                v-on:focus="setActive(1)"
                v-on:blur="setActive(0)">{{val}}</textarea>
            <div class="hint">
                <slot name="hint"></slot>
            </div>
            <span class="error" v-if="errors.length > 0">
                <div v-for="err in errors">{{err}}</div>
            </span>
        </div>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormText',
  mixins: [formFieldMixin],
  props: {
    minHeight: {
      type: Number,
      default: 100
    }
  },
  mounted: function () {
    let textarea = this.$el.querySelector('textarea')
    textarea.addEventListener('input', (e) => {
      this.$emit('input', textarea.value)
    })
  },
  computed: {
    val () {
      let val = this.value
      if (typeof val === 'undefined' || val === null) {
        val = ''
      }
      return val
    }
  }
}
</script>

<style lang="less">
    .form__field{
        input[type=color]{
            width: 50px;
            padding: 0;
        }
    }
</style>