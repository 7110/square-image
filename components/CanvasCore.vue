<script>
export default {
  name: 'CanvasCore',
  props: {
    item: {
      required: true,
      type: Object
    },
    // @TODO fix type
    canvas: {
      required: true,
      type: undefined
    }
  },
  render() {
    const item = this.item
    if (!(item.image && item.dw && item.dh && this.canvas)) return
    const ctx = this.canvas.getContext('2d')
    const [image, sx, sy, sw, sh, dx, dy, dw, dh] = [
      item.image,
      item.sx,
      item.sy,
      item.sw,
      item.sh,
      item.dx,
      item.dy,
      item.dw,
      item.dh
    ]
    return ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  }
}
</script>
