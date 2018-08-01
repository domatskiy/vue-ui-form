<template>
    <div class="form__field form__field--checkbox" :class="className">
        <label v-if="title"><span v-html="title"></span></label>
        <div class="field">
            <div class="checkbox" @click="change" :class="checked === true ? 'checked' : 'no'"></div>
            <span class="error" v-if="errors.length > 0">
                <div v-for="err in errors">{{err}}</div>
            </span>
        </div>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormCheckbox',
  mixins: [formFieldMixin],
  props: {
    value: {
      default: 0
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