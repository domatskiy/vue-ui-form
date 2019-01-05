export default class FormButton {
  constructor ($event, $name, $class, $def) {
    this.name = typeof $name === 'string' && $name ? $name : ''
    this.event = typeof $event === 'string' && $event ? $event : ''
    this.className = typeof $class === 'string' && $class ? $class : this.event
    this.def = typeof $def === 'boolean' && $def ? $def : false
  }
}
