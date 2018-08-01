<template lang="html">
    <div class="form__field form__field--select" :class="className">
        <label v-if="title">
            <span v-html="title"></span>
            <div class="hint">
                <slot name="label-hint"></slot>
            </div>
        </label>
        <div class="field">
            <div class="select">
                <div class="select__input" @click="toggleSelect">
                    <span v-html="value_text"></span>
                </div>
                <div class="select__dropdown" v-show="open === true">
                    <div class="list" @wheel="stopScroll" v-if="list.length > 0 || Object.keys(list).length > 0">
                        <div v-if="!required && !multi" @click="selValue(null, $event)" class="list__item list__item--empty">- не выбрано -</div>
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
      console.log('close')
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
      e.stopPropagation()
      e.preventDefault()
      console.log('openSelect')
      formFieldBus.$emit('close', true)
      this.open = true
      formFieldBus.$emit('open', true)
    },
    resetSelect: function (e) {
      e.stopPropagation()
      e.preventDefault()
      console.log('resetSelect')
      this.values = []
      this.close(false)
    },
    closeSelect: function (e) {
      console.log('closeSelect')
      e.stopPropagation()
      e.preventDefault()
      this.close(false)
    },
    toggleSelect: function (e) {
      console.log('toggleSelect')
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
      if (typeof this.values !== 'undefined' && (!check || (check && this.multi === false))) {
        console.log('close, check=', check, this.values)
        this.open = false
        if (this.multi === true) {
          this.$emit('input', this.values)
        } else {
          this.$emit('input', this.values.length > 0 ? this.values[0] : null)
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
      } else if (!this.multi) {
        this.values = []
      }
      this.close(true)
    },
    setNewValue: function () {
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
      // console.log('className', this.focus_active, this.value)
      if (this.focus_active || (typeof this.value !== 'undefined' && this.value !== null && this.value)) {
        cl.push('form__field--active')
      }
      if (this.error) {
        cl.push('form__field--error')
      }
      return cl
    },
    val () {
      let val = this.value
      if (typeof val === 'undefined' || val === null) {
        val = ''
      }
      return val
    }
  },
  watch: {
    open: function (open) {
      console.log('open', open)
    },
    value: function (newValue) {
      // console.log('changed: value=', newValue)
      this.setNewValue()
      // this.close(true)
      this.calcTitle()
    },
    values: function (newValues) {
      this.calcTitle()
    }
  }
}
</script>