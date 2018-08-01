<template>
    <div class="form__field form__field--view-files" v-if="value" :class="className">
        <label v-if="title">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <div class="view-files" v-if="Array.isArray(value)">
                <div class="view-files__item" v-for="(file, key) in value">
                    <a :href="file.file" v-if="typeof file == 'object'" :data-key="key">{{file.name}}</a>
                    <a :href="file" v-if="typeof file == 'string'" :data-key="key">{{file}}</a>
                    <div class="remove" @click="remove(file)"></div>
                </div>
            </div>
            <div class="files" v-if="typeof value == 'string'">
                <div class="view-files__item">
                    <a :src="value">{{value}}</a>
                    <div class="remove"></div>
                </div>
            </div>
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
  name: 'FormViewFiles',
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