<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

import Header from '@/components/header.vue'

@Component({
  name: 'default',
  components: {
    Header,
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
