<template>
  <svg>
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      default: '',
      type: String,
    },
  },
};
</script>
