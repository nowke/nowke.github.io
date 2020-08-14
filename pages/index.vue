<template>
  <div>
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
        <v-card flat outlined class="mb-4 indigo lighten-5">
          <v-card-text class="black--text about-text">
            Hello! I am Navaneesh Kumar, a realistic and pragmatic software
            developer. I thrive for productivity as a programmer, and as a human
            being. Professionally, I help build robust technologies and deliver
            quality results. <br /><br />

            To get in touch, connect me on LinkedIn -
            <a href="https://www.linkedin.com/in/nowke/">
              linkedin.com/in/nowke/
            </a>
          </v-card-text>
        </v-card>
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
            <project :project="project" />
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
            <notebook :notebook="notebook" />
          </v-col>
        </v-row>
      </template>
    </div>
    <app-footer v-if="!loading" />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

import footer from '@/components/footer.vue'
import project from '@/components/project.vue'
import notebook from '@/components/notebook.vue'

@Component({
  name: 'index',
  components: {
    'app-footer': footer,
    project,
    notebook,
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

.about-text {
  font-size: 1.2em;
  line-height: 1.5;
}
</style>
