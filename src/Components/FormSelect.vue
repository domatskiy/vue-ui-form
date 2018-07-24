<template lang="html">
    <div class="form__group form__group--select" :class="className">
        <label><span>{{title}}</span></label>
        <div class="select" @focus="setActive(1)" @blur="setActive(0)" @click="setActive(1)">
            <div class="select__input" @click="toggleSelect">
                <span>{{value_text}}</span>
            </div>
            <div class="select__dropdown" v-show="open === true">
                <div class="list" @wheel="stopScroll" v-if="list.length > 0 || Object.keys(list).length > 0">
                    <div
                        class="list__item"
                        :class="values && values.indexOf(val) > -1 ? 'list__item--checked' : ''"
                        v-for="(text, val) in list"
                        @click="selValue(val, $event)">
                        <span>{{text}}</span>
                    </div>
                </div>
                <div class="footer" v-show="multi === true">
                    <button type="button" @click="resetSelect">Сбросить</button>
                    <button type="button" @click="closeSelect($event)">Выбрать</button>
                </div>
            </div>
        </div>
        <span class="form__group-error" v-if="error">{{error}}</span>
    </div>
</template>

<script>
import formFieldBus from './../formFieldBus'
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormSelect',
  mixins: [formFieldMixin],
  components: {},
  props: {
    required: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    multi: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    },
    list: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      open: false,
      value_text: '',
      value_keys: [],
      values: []
    }
  },
  beforeMount: function () {
    this.setNewValue()
  },
  mounted: function () {
    formFieldBus.$on('close', () => {
      this.close(false)
    })
  },
  methods: {
    setActive: function (active) {
      this.focus_active = active
    },
    stopScroll: function (e) {
      e.stopPropagation()
    },
    openSelect: function (e) {
      formFieldBus.$emit('close', true)
      this.open = true
      formFieldBus.$emit('open', true)
      e.stopPropagation()
      e.preventDefault()
    },
    resetSelect: function (e) {
      this.values = []
      this.close(false)
      e.stopPropagation()
      e.preventDefault()
    },
    closeSelect: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.close(false)
    },
    toggleSelect: function (e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.open === false) {
        this.openSelect(e)
      } else {
        this.closeSelect(e)
      }
    },
    close: function (check) {
      if (typeof check !== 'boolean') {
        check = false
      }
      if (!check || (check && this.multi === false)) {
        this.open = false
        if (this.multi === true) {
          this.$emit('input', this.values)
        } else {
          this.$emit('input', this.values[0])
        }
      }
    },
    selValue: function ($value, $event) {
      $event.stopPropagation()
      if ($value !== null) {
        if (this.multi) {
          let $index = this.values.indexOf($value)
          // добавляем значение
          if ($index === -1) {
            this.values.push($value)
          } else {
            this.values.splice($index, 1)
          }
        } else {
          this.values = [$value]
        }

      }
      this.close(true)
    },
    setNewValue: function () {
      // console.log('setNewValue, this.value', this.value, Array.isArray(this.value))
      if (!Array.isArray(this.value)) {
        this.values = [this.value + '']
      } else {
        let v = []
        for (let k in this.value) {
          v.push(this.value[k] + '')
        }
        this.values = v
      }
    },
    calcTitle: function () {
      // console.log('changed: values=', newValues, Object.values(newValues), this.list)
      let text = []
      if (Array.isArray(this.values) && this.values.length > 0) {

        // заполняем текст
        this.values.forEach((val) => {
          if (this.list.hasOwnProperty(val)) {
            text.push(this.list[val])
          }
        })
      }

      this.value_text = text.length < 4 ? text.join(', ') : 'выбрано ' + text.length
    }
  },
  computed: {
    className () {
      let cl = []
      if (this.focus_active || (this.value !== null && this.value)) {
        cl.push('form__group--active')
      }
      if (this.error) {
        cl.push('form__group--error')
      }
      return cl
    },
    val () {
      let val = this.value
      if (val === undefined || val === null) {
        val = ''
      }
      return val
    }
  },
  watch: {
    value: function (newValue) {
      // console.log('changed: value=', newValue)
      this.setNewValue()
      this.close(true)
      this.calcTitle()
    },
    values: function (newValues) {
      this.calcTitle()
    }
  }
}
</script>
<style lang="less" scoped>
.form__group{

    .select{

        @padding-h: 10px;

        display: inline-block;
        position: relative;
        width: 100%;
        height: 26px;

        &__input{
            display: inline-block;
            position: relative;
            height: 33px;
            width: 100%;
            font-size: 15px;
            color: #464646;
            min-width: 50px;
            border-radius: 3px;
            padding: 0 15px;
            box-sizing: border-box;
            cursor: pointer;

            span{
                display: inline-block;
                max-width: 100%;
                overflow: hidden;
                height: 100%;
                line-height: 30px;
            }

            &:after{
                content: '';
                display: inline-block;
                position: absolute;
                top: 45%; right: 10px;
                margin: -9px 0 0 0;
                width: 15px;
                height: 15px;
                background-repeat: no-repeat;
                background-size: cover;
                /*background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxwb2x5Z29uIHBvaW50cz0iNDcuMjUsMTUgNDUuMTY0LDEyLjkxNCAyNSwzMy4wNzggNC44MzYsMTIuOTE0IDIuNzUsMTUgMjUsMzcuMjUgIi8+PC9zdmc+');*/
                background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB3aWR0aD0iMTc5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTM5NSA3MzZxMCAxMy0xMCAyM2wtNDY2IDQ2NnEtMTAgMTAtMjMgMTB0LTIzLTEwbC00NjYtNDY2cS0xMC0xMC0xMC0yM3QxMC0yM2w1MC01MHExMC0xMCAyMy0xMHQyMyAxMGwzOTMgMzkzIDM5My0zOTNxMTAtMTAgMjMtMTB0MjMgMTBsNTAgNTBxMTAgMTAgMTAgMjN6Ii8+PC9zdmc+');
            }
        }

        &__dropdown{

            display: inline-block;
            position: absolute;
            width: 100%;
            max-width: 700px;
            margin-top: 7px;
            top: 100%; left: 0;
            background-color: #fff;
            border: 1px solid #cccccc;
            z-index: 100;
            border-radius: 2px;
            box-sizing: border-box;
            box-shadow: 0 6px 12px rgba(0,0,0,.175);

            .list{
                display: inline-block;
                width: 100%;
                padding: 4px 0;
                box-sizing: border-box;
                max-height: 250px;
                overflow-y: auto;

                &__item{

                    position: relative;
                    display: inline-block;
                    width: 100%;
                    box-sizing: border-box;
                    font-size: 14px;
                    padding: 6px @padding-h 6px 34px;

                    div{
                        overflow: hidden;
                    }

                    &:before{
                        content: '';
                        display: inline-block;
                        position: absolute;
                        width: 18px;
                        height: 18px;
                        color: #dadada;
                        left: @padding-h;
                        top: 4px;
                    }

                    &--checked{
                        &:before{
                            color: #000;
                            background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI3LjcwNCw4LjM5N2MtMC4zOTQtMC4zOTEtMS4wMzQtMC4zOTEtMS40MjgsMCAgTDExLjk4OCwyMi41OWwtNi4yODItNi4xOTNjLTAuMzk0LTAuMzkxLTEuMDM0LTAuMzkxLTEuNDI4LDBjLTAuMzk0LDAuMzkxLTAuMzk0LDEuMDI0LDAsMS40MTRsNi45OTksNi44OTkgIGMwLjM5LDAuMzg2LDEuMDM5LDAuMzg2LDEuNDI5LDBMMjcuNzA0LDkuODExQzI4LjA5OSw5LjQyMSwyOC4wOTksOC43ODcsMjcuNzA0LDguMzk3QzI3LjMxLDguMDA2LDI4LjA5OSw4Ljc4NywyNy43MDQsOC4zOTd6IiBmaWxsPSIjMTIxMzEzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJDaGVjayIvPjxnLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjwvc3ZnPg==');
                            background-size: contain;
                            background-repeat: no-repeat;
                            background-color: transparent;
                        }
                    }

                    &:hover{
                        background-color: #eeeeee;
                        cursor: pointer;
                    }
                }
            }
            .footer{
                padding: 5px @padding-h;
                background-color: #c4e1f6;
                box-sizing: border-box;
                text-align: right;

                button{
                    padding: 5px 10px;
                    border: 0;
                    background-color: #c4c4c9;
                    color: #4c4c4c;
                    cursor: pointer;
                    &:hover{
                        background-color: #464646;
                        color: #fff;
                    }
                }
            }

        }
    }
}
</style>