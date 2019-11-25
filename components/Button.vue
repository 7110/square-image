<template>
  <component
    :is="tag"
    :href="!disabled ? href : undefined"
    :disabled="disabled"
    class="Button"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {
    tag: {
      required: true,
      type: String,
      validator(v) {
        return ['a', 'button'].includes(v)
      }
    },
    text: {
      required: true,
      type: String
    },
    href: {
      required: false,
      type: String,
      default: undefined
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.Button {
  width: 100%;
  padding: $si-basic-space * 2 $si-basic-space * 4;
  color: $si-color-text;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: 1px solid $si-color-border;
  border-radius: $si-border-radius;
  display: block;

  &[disabled] {
    color: $si-color-gray;
    cursor: auto;
  }
}
</style>
