<template>
  <v-row>
    <v-col :cols="9">
      <v-breadcrumbs :items="page.nav" class="pl-0" />
      <div class="markdown-body my-2">
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
      </div>
      <prev-next v-if="prev || next" :prev="prev" :next="next" />
    </v-col>
    <v-col :cols="3">
      <v-navigation-drawer right fixed clipped permanent>
        <div class="mt-16 pb-2 pt-5 px-2 font-weight-bold body-1">
          On this page
        </div>
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
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content('stats', slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found', err })
      })
    let prev = null
    let next = null

    if (slug !== 'index') {
      const prevNext = await $content('stats')
        .only(['title', 'slug'])
        .sortBy('position')
        .surround(slug)
        .fetch()
      prev = prevNext[0]
      next = prevNext[1]
    }

    return {
      page,
      prev,
      next,
    }
  },
  components: {
    'prev-next': PrevNext,
    'table-of-contents': ToC,
  },
}
</script>

<style lang="scss">
.v-application code {
  background-color: unset !important;
  color: unset !important;
}
</style>
