<template>
  <v-card class="d-flex flex-column" outlined style="width: 100%;">
    <v-card-title class="item-title">
      <a :href="notebook.link">{{ notebook.title }}</a>
    </v-card-title>
    <v-card-text v-if="notebook.description" class="text--primary">
      {{ notebook.description }}
    </v-card-text>
    <v-spacer />
  </v-card>
</template>

<script>
export default {
  props: {
    notebook: {
      type: Object,
      required: true,
    },
  },
}
</script>
