<template>
    <div class="form__group form__group--view" v-if="value">
        <label>{{title}}</label>
        <div>{{value}}</div>
        <span class="form__group__errors" v-if="error">{{error}}</span>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormView',
  mixins: [formFieldMixin]
}
</script>