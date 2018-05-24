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
        <span class="form__group__errors" v-if="error">{{error}}</span>
    </div>
</template>

<script>
import formSelectBus from './../formSelectBus'

export default {
  name: 'FormSelect',
  components: {},
  props: {
    required: {
      type: Boolean,
      default: function () {
        return true
      }
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      required: false,
      default: ''
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
    },
    error: {
      default: ''
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
    formSelectBus.$on('close', () => {
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
      formSelectBus.$emit('close', true)
      this.open = true
      formSelectBus.$emit('open', true)
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
        if(this.multi === true) {
          this.$emit('input', this.values)
        }
        else {
          this.$emit('input', this.values[0])
        }
      }
    },
    selValue: function ($value, $event) {
      $event.stopPropagation()
      if ($value !== null) {
        if(this.multi) {
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
