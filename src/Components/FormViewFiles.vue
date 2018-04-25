<template>
    <div class="form__group form__group--view-files" v-if="value">
        <label v-if="title">{{title}}</label>
        <div class="files">
            <div class="files__item" v-for="(file, key) in value" v-if="typeof value == 'object'">
                {{file.file}}
                <img :src="file.file">
            </div>
            <div class="files__item" v-if="typeof value == 'string'">
                <img :src="value">
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
      &__item{
        display: inline-block;
        padding: 20px;
        box-shadow: 0, 2px, 2px, rgba(0, 0, 0, 0.2);
      }
    }
</style>