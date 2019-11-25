<template>
  <li class="CanvasItem">
    <si-canvas
      :item="item"
      :width="width"
      :height="height"
      class="CanvasItem_canvas"
    />

    <div class="CanvasItem_info">
      <dl class="CanvasItem_description">
        <dt class="CanvasItem_heading">ファイル名</dt>
        <dd class="CanvasItem_name">{{ item.name }}</dd>
      </dl>
      <dl class="CanvasItem_description">
        <dt class="CanvasItem_heading">ファイルサイズ</dt>
        <dd class="CanvasItem_name">{{ Math.floor(size * 10) / 10 }} KB</dd>
      </dl>
    </div>

    <button @click="removeImage(item.name)" class="CanvasItem_remove">
      削除
    </button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

import Canvas from '~/components/Canvas'

export default {
  name: 'CanvasItem',
  components: {
    'si-canvas': Canvas
  },
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
    },
    index: {
      required: true,
      type: Number
    }
  },
  computed: {
    size() {
      return this.item.size / 1024
    }
  },
  methods: {
    ...mapMutations(['removeImage'])
  }
}
</script>

<style lang="scss">
.CanvasItem {
  padding: $si-basic-space * 2;
  display: flex;
  background-color: $si-color-white;
  position: relative;

  & + & {
    border-top: 1px solid $si-color-border;
  }

  &_canvas {
    width: 120px;
  }

  &_info {
    width: calc(100% - 120px);
    padding-left: $si-basic-space * 4;
    color: $si-color-text;
  }

  &_description + &_description {
    margin-top: $si-basic-space * 3;
  }

  &_heading {
    font-size: 14px;
    font-weight: bold;
  }

  &_name,
  &_size {
    margin-top: $si-basic-space / 2;
    font-size: 12px;
  }

  &_name {
    min-width: 0;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  &_remove {
    position: absolute;
    right: $si-basic-space * 2;
    bottom: $si-basic-space * 2;
  }

  @include mediaQuery($query: 'PC') {
    padding: $si-basic-space * 4;
    border: 1px solid $si-color-border;
    border-radius: $si-border-radius;

    & + & {
      margin-top: $si-basic-space * 5;
    }

    &_remove {
      position: absolute;
      right: $si-basic-space * 4;
      bottom: $si-basic-space * 4;
    }
  }
}
</style>
