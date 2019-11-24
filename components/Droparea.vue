<template>
  <label
    :class="[isDrag ? 'Droparea-drag' : undefined]"
    @dragover.prevent="() => (isDrag = true)"
    @dragleave.prevent="() => (isDrag = false)"
    @drop.prevent="onDrop"
    class="Droparea"
    for="droparea_file"
  >
    <span class="Droparea_icon" />
    <div class="Droparea_wrap">
      <p class="Droparea_message">画像をドロップ</p>
      <p class="Droparea_message">OR 画像を選択</p>
      <input
        type="file"
        class="Droparea_input"
        id="droparea_file"
        @change="onDrop"
      />
    </div>
  </label>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Droparea',
  data() {
    return {
      isDrag: false
    }
  },
  methods: {
    ...mapActions(['loadImage']),
    onDrop(event) {
      this.isDrag = false
      const files = event.target.files
        ? event.target.files
        : event.dataTransfer.files

      if (files.length === 0) {
        return false
      }

      const self = this
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.onload = function() {
          self.$store.dispatch('loadImage', {
            src: reader.result,
            name: files[i].name,
            size: files[i].size
          })
        }
        reader.readAsDataURL(files[i])
      }
    }
  }
}
</script>

<style lang="scss">
.Droparea {
  padding: $si-basic-space * 4;
  border: 2px dashed $si-color-border;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &_icon {
    $icon-size: 32px;
    width: $icon-size;
    height: $icon-size;
    mask-image: url('~assets/icons/file_copy.svg');
    mask-repeat: no-repeat;
    mask-size: $icon-size $icon-size;
    mask-position: center;
    background-color: $si-color-gray;
    display: block;
  }

  &_wrap {
    margin-left: $si-basic-space * 4;
    color: $si-color-gray;
  }

  &_input {
    display: none;
  }

  &-drag {
    border: 2px dashed $si-color-pink;
    background-color: $si-color-light-pink;
  }
}
</style>
