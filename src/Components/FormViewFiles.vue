<template>
    <div class="form__group form__group--view-files" v-if="value">
        <label v-if="title"><span>{{title}}</span></label>
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
    </div>
</template>

<script>
export default {
  name: 'FormViewFiles',
  props: ['title', 'value'],
  mounted: function () {},
  computed: {}
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