<template>
  <div class="home">
    <RegistrationComponent></RegistrationComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationComponent from '@/components/Registration.vue'

export default {
  name: 'RegistrationView',
  components: {
    RegistrationComponent
  }
}
</script>
