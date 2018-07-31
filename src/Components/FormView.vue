<template>
    <div class="form__field form__field--view" v-if="value" :class="className">
        <label v-if="title"><span v-html="title"></span></label>
        <div class="field" v-html="value"></div>
        <span class="error" v-if="errors.length > 0">
            <div v-for="err in errors">{{err}}</div>
        </span>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormView',
  mixins: [formFieldMixin]
}
</script>