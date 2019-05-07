<template>
    <div class="form__field form__field--text" :class="className">
        <label v-if="title" :for="id">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <input
              :id="id"
              :placeholder="placeholder"
              :readonly="readonly"
              :type="type"
              :disabled="disabled === true || processing === true"
              :required="required === true"
              v-on:focus="setActive(1)"
              v-on:blur="setActive(0)"
              :value="val"/>
            <div class="hint">
                <slot name="hint"></slot>
            </div>
            <div class="suggestion">
                <slot name="suggestion"></slot>
            </div>
            <div class="error" v-if="Array.isArray(errors) && errors.length > 0">
                <span v-for="err in errors">{{err}}</span>
            </div>
        </div>
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
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    readonly: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    keyUpChange: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    keyUpChangeDelay: {
      type: Number,
      required: false,
      default: function () {
        return 500
      }
    },
    suggestionUrl: {
      type: String,
      required: false,
      default: function () {
        return ''
      }
    },
    suggestionMinLen: {
      type: Number,
      required: false,
      default: function () {
        return 2
      }
    }
  },
  data: function () {
    return {
      timer: null
    }
  },
  mounted: function () {
    let input = this.$el.querySelector('input')
    if (input) {
      input.addEventListener('change', (e) => {
        this.$emit('input', input.value)
      })
      input.addEventListener('keyup', (e) => {
        if (this.timer !== null) {
          clearTimeout(this.timer)
          this.timer = null
        }
        if (input.value && input.value.length > this.suggestionMinLen) {
          this.$emit('suggestion-get', input.value)
        }
        if (this.keyUpChange === true) {
          this.timer = setTimeout(() => {
            this.$emit('input', input.value)
          }, this.keyUpChangeDelay)
        }
      })
    }
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
