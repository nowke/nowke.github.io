<template>
  <div class="pb-16">
    <template v-if="loading">
      <div class="loading-container d-flex align-content-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :size="100"
          :width="5"
        />
      </div>
    </template>
    <template v-else>
      <h4 class="section-heading my-2">Projects</h4>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.key"
          cols="12"
          sm="6"
          xl="3"
          lg="4"
          class="d-flex"
        >
          <Project :project="project" />
        </v-col>
      </v-row>

      <h4 class="section-heading my-2">Notebooks</h4>
      <v-row>
        <v-col
          v-for="notebook in notebooks"
          :key="notebook.key"
          cols="12"
          sm="6"
          xl="3"
          lg="4"
          class="d-flex"
        >
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
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

import Project from '@/components/project.vue'

@Component({
  name: 'index',
  components: {
    Project,
  },
})
class Index extends Vue {
  projects = []
  notebooks = []
  loading = true

  async created() {
    const contents = await this.$content('contents').without('body').fetch()
    this.projects = contents.projects
    this.notebooks = contents.notebooks
    this.loading = false
  }
}

export default Index
</script>

<style lang="scss" scoped>
.loading-container {
  height: 50vh;
  justify-content: center;
  align-items: center;
}

.section-heading {
  font-size: 1.9em !important;
  font-weight: 400;
  line-height: 2.5rem;
  letter-spacing: 0.0073529412em !important;
  font-family: 'Roboto', sans-serif !important;
}
</style>
