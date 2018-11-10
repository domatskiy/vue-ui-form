<template>
    <div class="from-view-block from-view-block--images">
        <div class="view-images">
            <div class="view-images__item" v-for="(file, key) in images">

                <slot name="image" v-bind="{file: file, key: key}">
                    <div class="image" :style="{backgroundImage: 'url(' + file + ')'}"></div>
                </slot>

                <div class="remove"
                    v-if="removed"
                    @click="remove(key, file)"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FormViewImages',
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
    images: function () {
      if (typeof this.value === 'string') {
        return this.value ? [this.value] : []
      }
      return this.value
    }
  }
}
</script>
