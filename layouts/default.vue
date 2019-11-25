<template>
  <div class="wrap">
    <si-header />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    'si-header': Header
  }
}
</script>

<style lang="scss">
.wrap {
  position: relative;

  > .Header {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: $si-color-white;
  }

  > main {
    display: block;
    background-color: $si-color-light-gray;
  }
}
</style>
