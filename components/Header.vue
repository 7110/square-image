<template>
  <header class="Header">
    <h1 class="Header_title">
      <img
        src="@/static/images/logo.png"
        alt="Square Image ロゴ画像"
        class="Header_logo"
      />
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
  min-height: $si-header-height;
  padding: $si-basic-space $si-basic-space * 4;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-bottom: 2px solid $si-color-border;

  &_title {
    color: $si-color-text;
    font-size: 24px;
    display: flex;
    align-items: center;
  }

  &_logo {
    width: 36px;
    height: 36px;
    margin-right: $si-basic-space * 4;
    display: block;
    flex-shrink: 0;
  }

  @include mediaQuery($query: 'PC') {
    &_title {
      width: 950px;
      margin: 0 auto;
    }
  }
}
</style>
