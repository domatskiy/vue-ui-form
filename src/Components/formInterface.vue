<template lang="html">
    <form class="form" @submit="submitForm" :class="formClass">
		<div class="form__processing" v-if="processing">
			<slot name="processing">Sending ...</slot>
		</div>
        <div class="form__title" v-if="title">{{title}}</div>
		<slot name="desc_before"></slot>
        <div class="form__body">
			<slot></slot>
		</div>
        <div class="form__errors">

		</div>
		<slot name="desc_after"></slot>
        <div class="form__buttons">
			<button
				type="button"
				v-for="button in buttons"
				:class="[buttonsClass, button.code, button.class, (button.def === true ? (button.class ? button.class + '--def' : 'def') : null)]"
				:disabled="processing === true"
				@click="buttonClick(button.event, $event)">{{button.name}}</button>
		</div>
    </form>
</template>

<script>
import FormButton from './../FormButton'
import formFieldBus from './../formFieldBus'

export default {
  name: 'FormInterface',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    buttons: {
      type: Array,
      required: false,
      default: function () {
        return [
          new FormButton('save', 'Сохранить', null, true),
          new FormButton('apply', 'Применить'),
          new FormButton('cancel', 'Отмена')
        ]
      }
    },
    buttonsClass: {
      type: String,
      required: false,
      default: ''
    },
    data: {
      type: Object,
      required: false,
      default: function () {
        return null
      }
    },
    errors: {
      type: Object,
      required: false,
      default: function () {
        return {}
      }
    },
    processing: {
      type: Boolean,
      required: false,
      default: function () {
        return false
      }
    }
  },
  data () {
    return {}
  },
  mounted: function () {},
  methods: {
    submitForm: function ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.buttons.forEach($button => {
        if ($button.def === true) {
          this.$emit($button.event, this.data)
        }
      })
    },
    buttonClick: function ($ecode, $event) {
      $event.preventDefault()
      $event.stopPropagation()
      if (typeof $ecode === 'string') {
        this.$emit($ecode, this.data)
      }
    }
  },
  computed: {
    formClass: function () {
      let classes = []
      // console.log('formClass: this.errors', this.errors)
      if (Array.isArray(this.err) && this.err.length > 0) {
        classes.push('form--error')
      } else if (typeof this.err === 'object' && Object.keys(this.err).length > 0) {
        classes.push('form--error')
      }

      if (this.processing) {
        classes.push('form--processing')
      }

      if (this.success) {
        classes.push('form--success')
      }
      return classes.join(' ')
    }
  },
  watch: {
    errors: {
      handler: function ($errors, oldVal) {
        // console.warn('errors >>>>>>>>>>>>>>>>>>>>> ', $errors)
        if ($errors === null) {
          formFieldBus.$emit('errors', [])
          return
        }
        if (Array.isArray($errors)) {
          $errors.forEach(($err) => {
            formFieldBus.$emit('errors', $err)
          })
        } else if (typeof $errors === 'object') {
          Object.keys($errors).map((key) => {
            // console.warn('', key, $errors[key])
            if (Array.isArray($errors[key])) {
              $errors[key].forEach(($err) => {
                formFieldBus.$emit('error', key, $err)
              })
            } else if (typeof $errors[key] === 'string') {
              formFieldBus.$emit('error', key, $errors[key])
            }
          })
        }
      },
      deep: true
    },
    processing: function ($processing) {
      console.log('change processing')
      formFieldBus.$emit('form-interface-processing', $processing)
    }
  }
}
</script>