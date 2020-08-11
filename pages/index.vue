<template>
  <div>
    <h4 class="text-h4 my-2">Projects</h4>

    <v-row>
      <v-col
        :cols="4"
        class="d-flex"
        v-for="project in projects"
        :key="project.key"
      >
        <Project :project="project" />
      </v-col>
    </v-row>
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

  async created() {
    const projects = await this.$content('projects').without('body').fetch()
    this.projects = projects.contents
  }
}

export default Index
</script>
