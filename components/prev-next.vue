<template>
  <div class="d-flex justify-space-between my-8">
    <template v-if="prev">
      <div class="d-flex">
        <v-icon color="primary" class="mr-2">mdi-arrow-left</v-icon>
        <a
          v-if="prev"
          :href="prev.path"
          class="font-weight-bold hover-underline"
        >
          {{ prev.title }}
        </a>
      </div>
    </template>
    <span v-else>&nbsp;</span>

    <template v-if="next">
      <div class="d-flex">
        <a
          v-if="next"
          :href="next.path"
          class="font-weight-bold hover-underline"
        >
          {{ next.title }}
        </a>
        <v-icon color="primary" class="ml-2">mdi-arrow-right</v-icon>
      </div>
    </template>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.hover-underline:link,
.hover-underline:visited {
  text-decoration: none;
  font-size: 1.1em;
}
.hover-underline:hover,
.hover-underline:active {
  text-decoration: underline;
}
</style>
