<template>
  <v-card class="d-flex flex-column" outlined style="width: 100%;">
    <v-img
      height="170px"
      :src="`/projects/${project.image}`"
      class="align-end"
      gradient="to bottom, rgba(245, 246, 252, 0.12), rgba(69, 73, 97, 0.8)"
    />
    <v-card-title class="item-title">
      <a :href="project.title_link">{{ project.title }}</a>
    </v-card-title>

    <v-card-text
      v-if="project.description || project.tags.length"
      class="text--primary pb-1"
    >
      <div>{{ project.description }}</div>
      <v-chip v-for="tag in project.tags" :key="tag" class="mr-2 my-2">
        {{ tag }}
      </v-chip>
    </v-card-text>
    <v-spacer />
    <v-card-actions class="d-flex align-end">
      <v-spacer />
      <v-btn v-if="project.github" text color="primary" :href="project.github">
        <v-icon small class="mr-1">mdi-github</v-icon>
        GitHub
      </v-btn>
      <v-btn v-if="project.link" text color="primary" :href="project.link">
        <v-icon small class="mr-1">mdi-link</v-icon>
        Link
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Project',
})
class Project extends Vue {
  @Prop() project
}

export default Project
</script>

<style lang="scss" scoped>
.v-card__title {
  word-break: break-word;
}
</style>
