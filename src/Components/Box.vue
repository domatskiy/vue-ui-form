<template>
    <div class="ui-box ui-box--toggle1">
        <div class="ui-box__header">
            <div class="ui-box__title">{{title}}</div>
            <button class="ui-box__toggle"></button>
        </div>
        <div class="ui-box__body">
            <slot>
                <p>пусто</p>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Box',
  props: ['title'],
  data () {
    return {}
  }
}
</script>

<style lang="less">

    @import "../__functions";

    .ui-box {
        .border-radius(5px);
        border-top: 2px solid #CCCCCC;
        background-color: #fff;
        margin-bottom: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

        &__header {
            position: relative;
            .border-box;
            display: inline-block;
            width: 100%;
            padding: 15px 15px 0;
        }

        &__title {
            margin: 0;
            padding: 0 0 15px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
        }

        &__toggle {
            border: none;
            outline: none;
            box-shadow: none;
            position: absolute;
            width: 20px;
            height: 20px;
            top: 50%;
            margin-top: -12px;
            right: 15px;
            background: transparent;
            padding: 0;
            border: none;
            cursor: pointer;
            outline: none;
        }

        &__body {
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            padding: 15px 15px;
            transition: height 0.3s linear;

            h4{
                margin-top: 0px;
                margin-bottom: 5px;
            }
        }


        &--toggle {

            .ui-box__title {
                border-bottom: 0;
            }

            .ui-box__body {
                overflow: hidden;
                height: 0;
                padding-top: 0;
                padding-bottom: 0;
                transition: height 0.3s linear, padding 0.3s linear;
            }

        }

    }

</style>
