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
			<slot name="errors"></slot>
			<ul>
				<li v-for="err in errors">{{err}}</li>
			</ul>
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
import FormButton from './../Classes/FormButton'
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
        return {}
      }
    },
    errors: {
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

      if (Array.isArray(this.errors) && this.errors.length > 0) {
        classes.push('form--error')
      } else if (typeof this.errors === 'object' && Object.keys(this.errors).length > 0) {
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
    errors: function ($errors) {
      if (Array.isArray($errors)) {
        $errors.forEach(($err) => {
          formFieldBus.$emit('errors', $err)
        })
      } else if (typeof $errors === 'object') {
        Object.keys($errors).map((key) => {
          $errors[key].forEach(($err) => {
            formFieldBus.$emit('error', key, $err)
          })
        })
      }
    },
    processing: function ($processing) {
      formFieldBus.$emit('form-interface-processing', $processing)
    }
  }
}
</script>