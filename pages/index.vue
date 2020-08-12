<template>
  <div>
    <h4 class="section-heading my-2">Projects</h4>
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
  loading = true

  async created() {
    const projects = await this.$content('projects').without('body').fetch()
    this.projects = projects.contents
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
