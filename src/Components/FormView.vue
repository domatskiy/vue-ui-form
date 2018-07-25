<template>
    <div class="form__group form__group--view" v-if="value" :class="className">
        <label v-if="title"><span v-html="title"></span></label>
        <div v-html="value"></div>
        <span class="form__group-error" v-if="errors.length > 0">
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