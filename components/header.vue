<template>
  <div>
    <v-app-bar app dark flat color="primary" clipped-left>
      <v-app-bar-nav-icon
        class="hidden-lg-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <a href="/" class="text-decoration-none white--text">
        <div color="primary" class="text-h5">
          Navaneesh Kumar
        </div>
      </a>
      <v-spacer></v-spacer>
      <v-btn icon dark href="https://github.com/nowke/" large>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon dark href="https://www.linkedin.com/in/nowke/" large>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn icon dark href="https://twitter.com/inowke" large>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon dark href="https://dev.to/nowke" large>
        <v-icon>mdi-dev-to</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped class="pa-4">
      <v-avatar size="150" class="mb-2">
        <img src="https://github.com/nowke.png" alt="Navaneesh Kumar" />
      </v-avatar>
      <div class="text-h5 font-weight-bold">Navaneesh Kumar</div>
      <div class="text-body-1">
        Programmer, Engineer, Student, Minimalist
      </div>

      <div class="mt-4 d-flex align-center body-2">
        <v-icon class="mr-2">mdi-school</v-icon> Arizona State University
      </div>
      <div class="mt-2 d-flex align-center body-2">
        <v-icon class="mr-2">mdi-domain</v-icon> VISA Inc. (2017-19)
      </div>
      <div class="mt-2 d-flex align-center body-2">
        <v-icon class="mr-2">mdi-map-marker</v-icon> Tempe, AZ
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ name: 'Header' })
class Header extends Vue {
  drawer = true
}

export default Header
</script>

<style lang="scss" scoped></style>
