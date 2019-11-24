<template>
  <header class="Header">
    <h1 class="Header_main">
      Square Image
    </h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.Header {
  min-height: 48px;
  padding: $si-basic-space * 2;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-bottom: 2px solid $si-color-border;

  &_main {
    font-size: 24px;
  }

  @include mediaQuery($query: 'PC') {
    &_main {
      width: 950px;
      margin: 0 auto;
    }
  }
}
</style>
