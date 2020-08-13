export default async ({ $content, params, error }, section) => {
  const slug = params.slug || 'index'
  const page = await $content(section, slug)
    .fetch()
    .catch((err) => {
      error({ statusCode: 404, message: 'Page not found', err })
    })
  let prev = null
  let next = null

  if (slug !== 'index') {
    const prevNext = await $content(section)
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
}
