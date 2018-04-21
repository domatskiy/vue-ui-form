<template>
    <form class="form" @submit="save" :class="formClass">
        <div class="form__title" v-if="title">{{title}}</div>
        <div class="form__body">
			<slot></slot>
		</div>
        <div class="form__errors">
			<ul>
				<li v-for="err in errors"></li>
			</ul>
		</div>
        <div class="form__buttons">
			<button type="button" class="save" v-if="buttons.save">{{buttons.save}}</button>
			<button type="button" class="apply" v-if="buttons.apply">{{buttons.apply}}</button>
			<button type="button" class="cancel" v-if="buttons.cancel">{{buttons.cancel}}</button>
		</div>
    </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
	buttons: {
      type: Object,
      required: false,
      default: function () {
        return {
		  save: 'Сохранить', 
		  apply: 'Применить',
		  cancel: 'Отмена'
		}
      }
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
      default: false
	}
  },
  data () {
    return {}
  },
  mounted: function () {},
  methods: {
    save: function (event) {
	  e.stopPropagation()
      e.preventDefault()
	  this.$emmit('save', this.data)	
    },
	apply: function (event) {
      e.stopPropagation()
      e.preventDefault()
	  this.$emmit('apply', this.data)	
    },
	cancel: function (event) {
      e.stopPropagation()
      e.preventDefault()
	  this.$emmit('cancel', this.data)
    }
  },
  computed: {
	formClass: function () {
		let classes = []
		if (this.errors) {
			classes.push('form--error');
		}
		if (this.processing) {
			classes.push('form--processing');
		}
		if (this.success) {
			classes.push('form--success');
		}
		return classes.join(' ')
	}
  }
}
</script>