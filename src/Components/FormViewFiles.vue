<template>
    <div class="from-view-block from-view-block--files">
        <div class="view-files">
            <div class="view-files__item" v-for="(file, key) in files">
                <slot name="file" v-bind="file">
                    <a :href="file.file" v-if="typeof file === 'object'" :data-key="key">
                        <span v-if="file.name">{{file.name}}</span>
                        <span v-if="file.size">{{file.size}}</span>
                    </a>
                    <a :href="file" v-if="typeof file === 'string'" :data-key="key">{{file}}</a>
                </slot>
                <div
                    class="remove"
                    v-if="removed"
                    @click="remove(key, file)"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormViewFiles',
  props: {
    value: {
      required: false
    },
    removed: {
      type: Boolean,
      required: false,
      default: function () {
        return true
      }
    }
  },
  methods: {
    remove: function ($file) {
      this.$emit('remove', $file)
    }
  },
  computed: {
    files: function () {
      if (typeof this.value === 'string') {
        return this.value ? [this.value] : []
      }
      return this.value
    }
  }
}
</script>
