<template>
  <nav>
    <div class="px-2 font-weight-bold text-overline">
      On this page
    </div>
    <scrollactive
      class="toc"
      highlight-first-item
      active-class="active-toc"
      :offset="70"
      tag="ul"
    >
      <li
        v-for="link of toc"
        :key="link.id"
        :class="{
          'body-1': link.depth === 2,
          'ml-3 body-2': link.depth === 3,
        }"
      >
        <NuxtLink
          class="scrollactive-item"
          :to="`#${link.id}`"
          style="color: grey;"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </scrollactive>
  </nav>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
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

.active-toc {
  color: #4c4c9d !important;
  caret-color: #4c4c9d !important;
  font-weight: bold;
}
</style>
