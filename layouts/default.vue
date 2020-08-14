<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container class="pa-4">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

import header from '@/components/header.vue'

@Component({
  name: 'default',
  components: {
    'app-header': header,
  },
})
class Default extends Vue {}

export default Default
</script>

<style lang="scss">
html {
  overflow: auto;
}
</style>
