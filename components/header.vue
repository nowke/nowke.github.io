<template>
  <header>
    <v-container>
      <div class="header-content">
        <a href="/" class="text-decoration-none white--text">
          <div color="primary" class="text-h5">
            Navaneesh Kumar
          </div>
        </a>
        <v-spacer />
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
      </div>
    </v-container>
  </header>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

@Component({ name: 'Header' })
class Header extends Vue {}

export default Header
</script>

<style lang="scss" scoped>
header {
  background: #4c4c9d;
  color: #fff;
  height: 65px;
  display: flex;
  align-items: center;
}

.header-content {
  display: flex;
  align-items: center;
}
</style>
