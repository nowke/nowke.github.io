<template>
  <div>
    <v-breadcrumbs :items="page.nav" class="pl-0" />
    <div class="markdown-body my-2">
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>
      <nuxt-content :document="page" />
    </div>
  </div>
</template>

<script>
import '@/assets/github-markdown.css'

export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: 'Page not found', err })
      })

    return {
      page,
    }
  },
}
</script>

<style lang="scss">
.v-application code {
  background-color: unset !important;
  color: unset !important;
}
</style>
