<template>
    <div class="form__field form__field--view" v-if="value" :class="className">
        <label v-if="title">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <div v-html="value" v-if="type === ''"></div>
            <div v-if="type === 'boolean'">{{ parseInt(value) === 1 || value === 'true' || value === 'y' ? 'Да' : 'Нет'}}</div>
            <div class="hint">
                <slot name="hint"></slot>
            </div>
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
      default: ''
    }
  }
}
</script>