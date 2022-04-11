<template>
  <div class="home">
    <LoginUI></LoginUI>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginUI from '@/components/Login.vue'

export default {
  name: 'LoginUser',
  components: {
    LoginUI
  }
}
</script>
