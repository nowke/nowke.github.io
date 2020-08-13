<template>
  <nav>
    <ul class="toc">
      <li
        v-for="link of toc"
        :key="link.id"
        :class="{
          'body-1': link.depth === 2,
          'ml-3 body-2': link.depth === 3,
        }"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    toc: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.toc {
  list-style-type: none !important;
  margin: 0;
  padding: 1em 0 0;
  text-align: left;
  width: 100%;

  li {
    margin-bottom: 8px;
    padding: 0 24px 0 8px;

    a {
      text-decoration: none;
    }
  }
}
</style>
