<template>
    <div class="form__group form__group--view" v-if="value" :class="className">
        <label>{{title}}</label>
        <div v-html="value"></div>
        <span class="form__group-error" v-if="error">{{error}}</span>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormView',
  mixins: [formFieldMixin]
}
</script>