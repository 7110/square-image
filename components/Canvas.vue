<template>
  <canvas :width="width" :height="height" />
</template>

<script>
export default {
  name: 'Canvas',
  props: {
    item: {
      required: true,
      type: Object
    },
    width: {
      required: true,
      type: Number
    },
    height: {
      required: true,
      type: Number
    }
  },
  mounted() {
    const item = this.item
    if (!(item.img && item.sw && item.sh && item.dw && item.dh)) {
      return
    }
    const ctx = this.$el.getContext('2d')
    const args = [
      item.img,
      item.sx ? item.sx : 0,
      item.sy ? item.sy : 0,
      item.sw,
      item.sh,
      item.dx ? item.dx : 0,
      item.dy ? item.dy : 0,
      item.dw,
      item.dh
    ]
    return ctx.drawImage(...args)
  }
}
</script>
