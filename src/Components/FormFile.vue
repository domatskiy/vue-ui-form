<template>
    <div class="form__group form__group--file">
        <label>{{title}}</label>
        <div ref="mainContainer">
            <div style="height: 0; width: 0; overflow: hidden;">
                <input type="file" :multiple="multi" @change="changeHandler" />
            </div>
            <div id="output"></div>
            <div v-if="files && typeof files == 'object'" class="file-list">
                <div v-for="(file, key) in files" class="file-list__item">
                    <img class="img-pre" :src="files_preview[key]">
                    <span class="name">{{ file.name }}</span>
                    <span class="size">[{{ Math.ceil(file.size / 1024) }}Кб]</span>
                    <a class="remove" v-show="file" @click="removeFile(key)">Удалить</a>
                </div>
            </div>
        </div>
        <div class="btn" @click="chooseFiles()">{{multi ? 'Добавить' : 'Выбрать'}}</div>
        <div class="form__group-error" v-if="error">{{error}}</div>
    </div>
</template>

<script>
export default {
  name: 'FormFile',
  props: {
    title: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    name: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    value: {
      // type: FileList// File FileList
    }
  },
  data: function () {
    return {
      files: [],
      files_preview: []
    }
  },
  mounted: function () {
    this.$refs.mainContainer.addEventListener('drop', this.onDrop, true)
  },
  methods: {
    changeHandler: function (e) {
      let __this = this
      let files = e.target.files || e.dataTransfer.files
      console.log('changeHandler:', files)
      if (!files.length) {
        return
      }
      /*  if (!f.type.match('image.*')) {
            alert("Image only please....");
        } */

      for (let file of files) {
        console.log(file, file.type)
        if (file instanceof File && file.type.match('image.*')) {
          var reader = new FileReader()
          reader.onload = (function (theFile) {
            return function (e) {
              if (__this.is_multi) {
                __this.files.push(theFile)
                __this.files_preview.push(e.target.result)
              } else {
                __this.files = [theFile]
                __this.files_preview = [e.target.result]
              }
            }
          })(file)
          reader.readAsDataURL(file)
        }
      }
      console.log('file ... ok')
    },
    eventOnElement (event, object) {
      let rect = object.getBoundingClientRect()
      return event.pageX >= rect.left && event.pageY >= rect.top && event.pageX <= rect.right && event.pageY <= rect.bottom
    },
    onDrop (e) {
      e.stopPropagation()
      e.preventDefault()
      if (!e.dataTransfer.files || !this.eventOnElement(e, this.$refs.mainContainer)) {
        return
      }
      if (!e.dataTransfer.files || !e.dataTransfer.files[0]) {
        return
      }
      if (!/^image\//.test(e.dataTransfer.files[0].type)) {
        return
      }
      this.selectImage(e.dataTransfer.files[0])
    },
    chooseFiles: function () {
      console.log('chooseFiles')
      this.$el.querySelector('input').click()
    },
    removeFile (key) {
      this.files.splice(key, 1)
      this.files_preview.splice(key, 1)
      // if (!this.image.length) {
      //  this.$refs.im.value = ''
      // }
    }
  },
  computed: {
    is_multi () {
      return typeof this.$props.multiple !== 'undefined'
    },
    multi () {
      // console.log('multiple=', this.$props.multiple)
      return this.is_multi ? 'multiple' : false
    }
  },
  watch: {
    value: function (val) {
      // console.log('value changed', val)
      if (typeof val === 'undefined') {
        this.files = []
        this.files_preview = []
      }
    },
    files: function (files) {
      // http://insbor.ru/vuejs-image-upload

      // console.log('input $emit, multy=', this.is_multi)

      if (this.is_multi) {
        let dt = new DataTransfer()
        for (let file of this.files) {
          dt.items.add(file)
        }
        this.$emit('input', dt.files)
      } else {
        for (let file of this.files) {
          this.$emit('input', file)
        }
      }
      // this.$emit('input', this.is_multi ? dt.files : dt.files[0])
      // console.log('input $emit ... ok')
    }
  }
}
</script>

<style lang="less" scoped>
    @import "../__functions";

    .file-list{
        .flex(row, wrap, flex-start);
        margin: 0 -10px;

        &__item{
            width: 100px;
            padding: 10px;
            .border-box;

            img{
              width: 100px;
              height: auto;
              max-height: 100px;
            }
            .name{
                display: inline-block;
                max-width: 100%;
                max-height: 50px;
                overflow: hidden;
            }
            .size{
                display: inline-block;
                width: 100%;
            }
            a{color: #365057;}
        }
    }
    .form__group{
        input[type=color]{
            width: 50px;
            padding: 0;
        }
    }
</style>