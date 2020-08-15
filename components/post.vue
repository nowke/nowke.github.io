<template>
  <v-card class="d-flex flex-column" outlined style="width: 100%;">
    <v-card-title class="item-title">
      <a :href="post.url">{{ post.title }}</a>
    </v-card-title>
    <v-spacer />
    <v-card-actions class="py-2 px-4">
      <div>
        {{
          new Date(post.published_at).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })
        }}
      </div>
      <v-spacer />
      <span>
        <v-icon>mdi-heart-outline</v-icon>
        {{ post.public_reactions_count }}
      </span>
      <span class="ml-3">
        <v-icon>mdi-comment-outline</v-icon>
        {{ post.comments_count }}
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>
