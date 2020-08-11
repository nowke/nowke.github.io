<template>
  <v-app>
    Header
    <nuxt />
  </v-app>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'default',
})
class Default extends Vue {}

export default Default
</script>
