<template>
    <div class="form__field form__field--view-files" v-if="value" :class="className">
        <label v-if="title">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <div class="view-images" v-if="Array.isArray(value)">
                <div class="view-images__item" v-for="(file, key) in value">
                    <img :src="file.file" v-if="typeof file == 'object'" :data-key="key">
                    <img :src="value" v-if="typeof file == 'string'" :data-key="key"/>
                    <div class="remove" @click="remove(file)"></div>
                </div>
            </div>
            <div class="view-images" v-if="typeof value == 'string'">
                <div class="view-images__item">
                    <img :src="value"/>
                    <div class="remove" @click="remove(value)"></div>
                </div>
            </div>
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
  name: 'FormViewImages',
  mixins: [formFieldMixin],
  methods: {
    remove: function ($file) {
      this.$emit('remove', $file)
    }
  }
}
</script>

<style lang="less" scope>
    .files{
      margin: 0 -15px;
      &__item{
        display: inline-block;
        padding: 0 15px 15px;
        box-shadow: 1px, 4px, 2px, rgba(0, 0, 0, 0.4);
      }
    }
</style>