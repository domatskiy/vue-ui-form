import Vue from 'vue'

const formFieldBus = new Vue({
  data () {
    return {
      body_click_handler: null
    }
  },
  created: function () {
    this.body_click_handler = () => {
      document.body.removeEventListener('click', this.body_click_handler)
      this.$emit('close', true)
    }
    this.$on('open', () => {
      document.body.addEventListener('click', this.body_click_handler)
    })
  }
})

export default formFieldBus
