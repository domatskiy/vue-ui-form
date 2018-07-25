<template>
    <div class="form__group form__group--view-files" v-if="value" :class="className">
        <label v-if="title"><span v-html="title"></span></label>
        <div class="files" v-if="Array.isArray(value)">
            <div class="files__item" v-for="(file, key) in value">
                <img :src="file.file" v-if="typeof file == 'object'" :data-key="key">
                <img :src="value" v-if="typeof file == 'string'" :data-key="key"/>
            </div>
        </div>
        <div class="files" v-if="typeof value == 'string'">
            <div class="files__item">
                <img :src="value"/>
            </div>
        </div>
        <span class="form__group-error" v-if="errors.length > 0">
            <div v-for="err in errors">{{err}}</div>
        </span>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormViewFiles',
  mixins: [formFieldMixin],
  watch: {
    /*
    focus_active: function () {
      this.focus_active =
    }
    */
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