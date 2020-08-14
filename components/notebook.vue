<template>
  <v-card class="d-flex flex-column" outlined style="width: 100%;">
    <v-card-title>{{ notebook.title }}</v-card-title>
    <v-card-text v-if="notebook.description" class="text--primary">
      {{ notebook.description }}
    </v-card-text>
    <v-spacer />
    <v-card-actions class="d-flex align-end">
      <v-spacer />
      <v-btn
        v-if="notebook.link"
        text
        color="primary"
        :href="notebook.link"
        target="_blank"
      >
        <v-icon small class="mr-1">mdi-eye</v-icon>
        View
      </v-btn>
    </v-card-actions>
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
