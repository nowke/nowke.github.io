<template>
  <content-renderer :page="page" :prev="prev" :next="next" />
</template>

<script>
import contentRender from '@/utils/contentRender'

export default {
  asyncData: (ctx) => contentRender(ctx, 'realtime-dashboard'),
}
</script>
