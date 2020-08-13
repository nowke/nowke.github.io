<template>
  <v-row>
    <v-col :md="page.toc.length ? 9 : 12" :xs="12" :sm="12">
      <v-breadcrumbs :items="page.nav" class="pl-0" />
      <div class="py-2 mb-3 d-md-none indigo lighten-5">
        <table-of-contents :toc="page.toc" />
      </div>
      <div class="markdown-body my-2">
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </div>
      <prev-next v-if="prev || next" :prev="prev" :next="next" />
    </v-col>
    <v-col v-if="page.toc.length" :cols="3" class="d-none d-md-block">
      <v-navigation-drawer right fixed clipped permanent class="pt-16 mt-2">
        <table-of-contents :toc="page.toc" />
      </v-navigation-drawer>
    </v-col>
  </v-row>
</template>

<script>
import '@/assets/github-markdown.css'

import PrevNext from '@/components/prev-next.vue'
import ToC from '@/components/table-of-contents.vue'

export default {
  components: {
    'prev-next': PrevNext,
    'table-of-contents': ToC,
  },
  props: {
    page: {
      type: Object,
      default: () => null,
    },
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

<style lang="scss">
.v-application code {
  background-color: unset !important;
  color: unset !important;
}

.katex-display .accent,
.math-inline .accent {
  background-color: unset !important;
}
</style>
