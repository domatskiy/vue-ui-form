<template>
    <div class="form__field form__field--view" v-if="value || canShowEmpty" :class="className">
        <label v-if="title">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <div class="prefix" v-html="prefix" v-if="prefix"></div>
            <div class="value" v-html="value" v-if="value && type === 'text'"></div>
            <div class="value" v-if="!value">
                <slot></slot>
            </div>
            <div class="postfix" v-html="postfix" v-if="postfix && type === 'text'"></div>
            <div v-if="type === 'boolean'">{{ parseInt(value) === 1 || value === 'true' || value === 'y' ? 'Да' : 'Нет'}}</div>
            <div class="hint">
                <slot name="hint"></slot>
            </div>
        </div>
        <div class="error" v-if="Array.isArray(errors) && errors.length > 0">
          <span v-for="err in errors">{{err}}</span>
        </div>
        <span class="error" v-if="errors.length > 0">
            <div v-for="err in errors">{{err}}</div>
        </span>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormView',
  mixins: [formFieldMixin],
  props: {
    type: {
      type: String,
      default: 'text'
    },
    showEmpty: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: ''
    },
    postfix: {
      type: String,
      default: ''
    }
  },
  date: function () {
    return {
      canShowEmpty: this.showEmpty
    }
  },
  beforeMount: function () {
    if (typeof this.$slots.default !== 'undefined') {
      this.canShowEmpty = true
    }
  }
}
</script>
