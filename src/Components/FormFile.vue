<template>
    <div class="form__group form__group--file" :class="className">
        <label v-if="title"><span v-html="title"></span></label>
        <div ref="mainContainer">
            <div style="height: 0; width: 0; overflow: hidden;">
                <input
                    type="file"
                    :disabled="disabled"
                    :multiple="multi"
                    @change="changeHandler" />
            </div>
            <div v-if="files && Array.isArray(files) && files.length > 0" class="file-list">
                <div v-for="(file, key) in files" class="file-list__item">
                    <div class="file-card">
                        <div class="file-card__img">
                            <img class="img-pre"
                                 :src="files_preview[key]" v-if="files_preview[key]">
                            <img class="img-pre"
                                 v-if="!files_preview[key] && file.type.match('application/pdf')"
                                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIHZpZXdCb3g9IjAgMCA0OSA2NCIgd2lkdGg9IjQ5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2NiMDYwNjsKICAgICAgfQoKICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgZmlsbC1ydWxlOiBldmVub2RkOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmYjhkOGQ7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQogICAgPC9zdHlsZT48L2RlZnM+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDkuMDAwLDE2Ljg0MiBMNDkuMDAwLDU4Ljk0NyBDNDkuMDAwLDYxLjczOCA0Ni43MzAsNjQuMDAwIDQzLjkzMSw2NC4wMDAgTDUuMDY5LDY0LjAwMCBDMi4yNjksNjQuMDAwIC0wLjAwMCw2MS43MzggLTAuMDAwLDU4Ljk0NyBMLTAuMDAwLDUuMDUzIEMtMC4wMDAsMi4yNjIgMi4yNjksLTAuMDAwIDUuMDY5LC0wLjAwMCBMMzIuMTAzLC0wLjAwMCBMNDkuMDAwLDE2Ljg0MiBaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNDkuMDAwLDE1Ljg5OSBMNDkuMDAwLDE3Ljk5NSBMMzUuMTg3LDE3Ljk5NSBDMzIuMzI3LDE3Ljk5NSAzMS4wMDgsMTUuNjc1IDMxLjAwOCwxMi44MTQgTDMxLjAwOCwtMC4wMDAgTDMzLjEwMCwtMC4wMDAgTDQ5LjAwMCwxNS44OTkgWiIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTM3LjYwNiwzNC4wNDcgQzM3LjE3MCwzMy45MDMgMzYuNzUwLDMzLjgzMCAzNi4zNDUsMzMuODMwIEMzNS44ODUsMzMuODMwIDM1LjU2OSwzMy45MjUgMzUuMzk2LDM0LjExNSBDMzUuMjI0LDM0LjMwNSAzNS4xMzgsMzQuNjQxIDM1LjEzOCwzNS4xMjQgTDM1LjEzOCwzNi4wNDcgTDM3LjA3MSwzNi4wNDcgTDM3LjA3MSwzNy45MDEgTDM1LjEzOCwzNy45MDEgTDM1LjEzOCw0NS41MzYgTDMyLjc5Niw0NS41MzYgTDMyLjc5NiwzNy45MDEgTDMxLjU4OSwzNy45MDEgTDMxLjU4OSwzNi4wNDcgTDMyLjc5NiwzNi4wNDcgTDMyLjc5NiwzNS4xMjQgQzMyLjc5NiwzMy45NDggMzMuMDg4LDMzLjA5OCAzMy42NzIsMzIuNTczIEMzNC4yNTYsMzIuMDQ4IDM1LjEzNCwzMS43ODYgMzYuMzA4LDMxLjc4NiBDMzYuODU5LDMxLjc4NiAzNy40NDMsMzEuODYxIDM4LjA2MCwzMi4wMTIgTDM3LjYwNiwzNC4wNDcgWk0yNy43OTYsNDQuNjEzIEMyNy4zNjAsNDQuOTgxIDI2LjkwMCw0NS4yNzQgMjYuNDE2LDQ1LjQ5MSBDMjUuOTMyLDQ1LjcwOCAyNS4zODIsNDUuODE2IDI0Ljc2NSw0NS44MTYgQzIzLjU2Nyw0NS44MTYgMjIuNjUwLDQ1LjM4NSAyMi4wMTUsNDQuNTIzIEMyMS4zNzksNDMuNjYwIDIxLjA2Miw0Mi40NDIgMjEuMDYyLDQwLjg2OCBDMjEuMDYyLDM5LjI1OCAyMS40MTEsMzguMDA3IDIyLjExMCwzNy4xMTQgQzIyLjgwOSwzNi4yMjIgMjMuNzkwLDM1Ljc3NSAyNS4wNTUsMzUuNzc1IEMyNS41MDMsMzUuNzc1IDI1Ljk2MiwzNS44NjcgMjYuNDM0LDM2LjA1MSBDMjYuOTA2LDM2LjIzNSAyNy4yOTcsMzYuNDY5IDI3LjYwNSwzNi43NTIgTDI3LjYwNSwzMi4wNjYgTDI5Ljk0NywzMi4wNjYgTDI5Ljk0Nyw0NS41MzYgTDI3Ljc5Niw0NS41MzYgTDI3Ljc5Niw0NC42MTMgWk0yNy42MDUsMzguNjc5IEMyNy4zNTcsMzguNDU2IDI3LjA1MCwzOC4yNTggMjYuNjg0LDM4LjA4NiBDMjYuMzE4LDM3LjkxNSAyNS45NDQsMzcuODI5IDI1LjU2MywzNy44MjkgQzI0LjkzNCwzNy44MjkgMjQuNDI5LDM4LjA5OSAyNC4wNDgsMzguNjM4IEMyMy42NjYsMzkuMTc4IDIzLjQ3NiwzOS45MDkgMjMuNDc2LDQwLjgzMiBDMjMuNDc2LDQxLjc0MyAyMy42MzIsNDIuNDU3IDIzLjk0Myw0Mi45NzYgQzI0LjI1NSw0My40OTUgMjQuNzM3LDQzLjc1NCAyNS4zOTEsNDMuNzU0IEMyNS43NzgsNDMuNzU0IDI2LjE3Myw0My42NjUgMjYuNTc1LDQzLjQ4NyBDMjYuOTc3LDQzLjMwOSAyNy4zMjEsNDMuMDkwIDI3LjYwNSw0Mi44MzEgTDI3LjYwNSwzOC42NzkgWk0xNy41OTUsNDUuMjAxIEMxNy4wMjAsNDUuNjExIDE2LjMzNCw0NS44MTYgMTUuNTM1LDQ1LjgxNiBDMTQuNDgyLDQ1LjgxNiAxMy41ODQsNDUuNDg4IDEyLjg0MCw0NC44MzAgTDEyLjg0MCw0OS4xMDkgTDEwLjQ5OCw0OS4xMDkgTDEwLjQ5OCwzNi4wNDcgTDEyLjY1OCwzNi4wNDcgTDEyLjY1OCwzNi45NzggQzEzLjA5NCwzNi42MDQgMTMuNTUyLDM2LjMxMCAxNC4wMzMsMzYuMDk2IEMxNC41MTQsMzUuODgyIDE1LjA2NiwzNS43NzUgMTUuNjg5LDM1Ljc3NSBDMTYuODkzLDM1Ljc3NSAxNy44MTAsMzYuMTk3IDE4LjQzOSwzNy4wNDIgQzE5LjA2OCwzNy44ODYgMTkuMzgzLDM5LjExMyAxOS4zODMsNDAuNzIzIEMxOS4zODMsNDEuNzQzIDE5LjIyOSw0Mi42NDEgMTguOTIwLDQzLjQxOSBDMTguNjExLDQ0LjE5NyAxOC4xNzAsNDQuNzkxIDE3LjU5NSw0NS4yMDEgWk0xNi40ODgsMzguNjAyIEMxNi4xNjcsMzguMDg2IDE1LjY4OSwzNy44MjkgMTUuMDU0LDM3LjgyOSBDMTQuNjczLDM3LjgyOSAxNC4yODEsMzcuOTE4IDEzLjg3OSwzOC4wOTUgQzEzLjQ3NiwzOC4yNzMgMTMuMTMwLDM4LjQ5MiAxMi44NDAsMzguNzUxIEwxMi44NDAsNDIuOTAzIEMxMy4wODgsNDMuMTI3IDEzLjM5NSw0My4zMjQgMTMuNzYxLDQzLjQ5NiBDMTQuMTI3LDQzLjY2OCAxNC41MDMsNDMuNzU0IDE0Ljg5MSw0My43NTQgQzE1LjUzMiw0My43NTQgMTYuMDM5LDQzLjQ4MSAxNi40MTEsNDIuOTM1IEMxNi43ODMsNDIuMzg5IDE2Ljk2OSw0MS42NjQgMTYuOTY5LDQwLjc2MCBDMTYuOTY5LDM5LjgzNyAxNi44MDgsMzkuMTE4IDE2LjQ4OCwzOC42MDIgWiIvPjwvZz48L3N2Zz4=">
                            <img class="img-pre"
                                 v-if="!files_preview[key] && (!file.type || file.type.match('image.*'))"
                                 src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ4IDQ4IiBoZWlnaHQ9IjQ4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA0OCA0OCIgd2lkdGg9IjQ4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3LDQ3SDExYy0yLjIwOSwwLTQtMS43OTEtNC00VjVjMC0yLjIwOSwxLjc5MS00LDQtNGgxOC45NzMgIGMwLjAwMiwwLDAuMDA1LDAsMC4wMDcsMGgwLjAySDMwYzAuMzIsMCwwLjU5MywwLjE2MSwwLjc3NiwwLjM5NWw5LjgyOSw5LjgyOUM0MC44NCwxMS40MDcsNDEsMTEuNjgsNDEsMTJsMCwwdjAuMDIxICBjMCwwLjAwMiwwLDAuMDAzLDAsMC4wMDVWNDNDNDEsNDUuMjA5LDM5LjIwOSw0NywzNyw0N3ogTTMxLDQuMzgxVjExaDYuNjE5TDMxLDQuMzgxeiBNMzksMTNoLTljLTAuNTUzLDAtMS0wLjQ0OC0xLTFWM0gxMSAgQzkuODk2LDMsOSwzLjg5Niw5LDV2MzhjMCwxLjEwNCwwLjg5NiwyLDIsMmgyNmMxLjEwNCwwLDItMC44OTYsMi0yVjEzeiBNMzMsMzlIMTVjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFjMC0wLjU1MiwwLjQ0Ny0xLDEtMWgxOCAgYzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMzguNTUzLDMzLjU1MywzOSwzMywzOXogTTMzLDMxSDE1Yy0wLjU1MywwLTEtMC40NDctMS0xYzAtMC41NTIsMC40NDctMSwxLTFoMThjMC41NTMsMCwxLDAuNDQ4LDEsMSAgQzM0LDMwLjU1MywzMy41NTMsMzEsMzMsMzF6IE0zMywyM0gxNWMtMC41NTMsMC0xLTAuNDQ3LTEtMWMwLTAuNTUyLDAuNDQ3LTEsMS0xaDE4YzAuNTUzLDAsMSwwLjQ0OCwxLDFDMzQsMjIuNTUzLDMzLjU1MywyMywzMywyMyAgeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
                        </div>
                        <div class="file-card__info">
                            <span class="name" v-if="fileName === true">{{ file.name }}</span>
                            <span class="size">size: {{ Math.ceil(file.size / 1024) }}Кб</span>
                            <a class="remove" v-show="file" @click="removeFile(key)">Удалить</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="file-buttons">
                <a class="btn" @click="chooseFiles()">{{multi ? 'Добавить' : 'Выбрать'}}</a>
            </div>

        </div>
        <span class="form__group-error" v-if="errors.length > 0">
            <div v-for="err in errors">{{err}}</div>
        </span>
    </div>
</template>

<script>
import formFieldMixin from './FormFieldMixin'

export default {
  name: 'FormFile',
  mixins: [formFieldMixin],
  props: {
    fileName: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    multiple: {
      type: Boolean,
      default: function () {
        return false
      }
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
      let files = e.target.files || e.dataTransfer.files
      // console.log('changeHandler:', files)
      if (!files.length) {
        return
      }
      let __this = this
      for (let file of files) {
        console.log(file, file.type)
        if (file instanceof File && file.type.match('image.*')) {
          var reader = new FileReader()
          reader.onload = ((theFile) => {
            return function (e) {
              if (this.multi) {
                __this.files.push(theFile)
                __this.files_preview.push(e.target.result)
              } else {
                __this.files = [theFile]
                __this.files_preview = [e.target.result]
              }
            }
          })(file)
          reader.readAsDataURL(file)
        } else {
          if (this.multi) {
            __this.files.push(file)
            __this.files_preview.push(e.target.result)
          } else {
            __this.files = [file]
            __this.files_preview = [e.target.result]
          }
        }
      }
      // console.log('file ... ok', this.files)
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
      this.$el.querySelector('input').click()
    },
    removeFile (key) {
      this.files.splice(key, 1)
      this.files_preview.splice(key, 1)
    }
  },
  computed: {
    multi () {
      console.log('multi', this.multiple)
      return this.multiple === true
    }
  },
  watch: {
    value: function (val) {
      if (typeof val === 'undefined') {
        this.files = []
        this.files_preview = []
      }
    },
    files: function (files) {
      if (this.multi === true) {
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
    }
  }
}
</script>