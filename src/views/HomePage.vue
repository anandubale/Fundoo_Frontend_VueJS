<template>
  <div class="home">
    <navigationBar></navigationBar>
      <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
import navigationBar from '@/components/NavigationBar.vue'

export default {
  name: 'navigation_Bar',
  components: {
    navigationBar
  }
}
</script>
