<template>
    <div class="form__group form__group--view" v-if="value">
        <label>{{title}}</label>
        <div>{{value}}</div>
    </div>
</template>

<script>
export default {
  name: 'FormView',
  props: ['title', 'value'],
  mounted: function () {},
  computed: {}
}
</script>

<style lang="less">
    .form__group{
        input[type=color]{
            width: 50px;
            padding: 0;
        }
    }
</style>