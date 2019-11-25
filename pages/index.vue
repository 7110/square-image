<template>
  <div class="tool">
    <div class="tool_main">
      <si-canvas-item
        v-for="(item, index) in images"
        :key="index"
        :item="{
          ...item,
          ...resizeDelta(item.sw, item.sh, CANVAS_SIZE)
        }"
        :width="CANVAS_SIZE"
        :height="CANVAS_SIZE"
        :index="index"
      />
    </div>

    <nav class="tool_navs">
      <div class="tool_nav">
        <si-droparea />
      </div>

      <div class="tool_nav">
        <si-button
          :tag="'button'"
          :text="'全てダウンロード'"
          :disabled="!images.length"
          @click.native="downloadCanvas()"
        />
      </div>

      <div class="tool_info">
        <p class="tool_supplement">
          developed by
          <a
            href="https://github.com/7110"
            target="_blank"
            rel="noopener noreferrer"
            >@7110</a
          >
        </p>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Button from '~/components/Button'
import CanvasItem from '~/components/CanvasItem'
import Droparea from '~/components/Droparea'

export default {
  components: {
    'si-button': Button,
    'si-canvas-item': CanvasItem,
    'si-droparea': Droparea
  },
  computed: {
    ...mapState({
      images: (state) => state.images
    })
  },
  asyncData() {
    return {
      CANVAS_SIZE: 120
    }
  },
  methods: {
    ...mapActions(['loadImage']),
    resizeDelta(x, y, standard) {
      if (!x || !y || !standard) return {}
      if (x < y) {
        const dx = (standard - (standard * x) / y) / 2
        return {
          sx: 0,
          sy: 0,
          sw: x,
          sh: y,
          dx,
          dy: 0,
          dw: (standard * x) / y,
          dh: standard
        }
      } else if (x > y) {
        const dy = (standard - (standard * y) / x) / 2
        return {
          sx: 0,
          sy: 0,
          sw: x,
          sh: y,
          dx: 0,
          dy,
          dw: standard,
          dh: (standard * y) / x
        }
      } else {
        return {
          sx: 0,
          sy: 0,
          sw: x,
          sh: y,
          dx: 0,
          dy: 0,
          dw: standard,
          dh: standard
        }
      }
    },
    downloadCanvas() {
      if (process.browser) {
        for (let i = 0; i < this.images.length; i++) {
          const image = this.images[i]
          const canvas = document.createElement('canvas')
          const size = image.sw < image.sh ? image.sh : image.sw
          canvas.width = size
          canvas.height = size

          const d = this.resizeDelta(image.sw, image.sh, size)
          const args = [
            image.img,
            d.sx,
            d.sy,
            d.sw,
            d.sh,
            d.dx,
            d.dy,
            d.dw,
            d.dh
          ]

          const ctx = canvas.getContext('2d')
          ctx.drawImage(...args)

          const link = document.createElement('a')
          link.href = canvas.toDataURL('image/png')
          link.download = image.name
          link.click()
        }
      }
    }
  }
}
</script>

<style lang="scss">
.Shadow {
  display: none;
}

.tool {
  position: relative;

  &_navs {
    position: sticky;
    bottom: 0;
  }

  &_nav {
    padding: $si-basic-space * 4;
    background-color: $si-color-white;
  }

  &_nav + &_nav {
    padding-top: 0;
  }

  &_info {
    display: none;
  }

  @include mediaQuery($query: 'PC') {
    max-width: 950px;
    min-height: calc(100vh - #{$si-header-height});
    margin: 0 auto;
    padding: $si-basic-space * 10 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &_main {
      width: 100%;
    }

    &_navs {
      width: 300px;
      margin-left: $si-basic-space * 5;
      position: sticky;
      top: ($si-header-height + $si-basic-space * 10);
      flex-shrink: 0;
    }

    &_nav {
      border: 1px solid $si-color-border;
      border-radius: $si-border-radius;
    }

    &_nav + &_nav {
      margin-top: $si-basic-space * 5;
      padding: $si-basic-space * 4;
    }

    &_info {
      margin-top: $si-basic-space * 3;

      display: block;
    }

    &_supplement {
      color: $si-color-gray;
    }
  }
}
</style>
