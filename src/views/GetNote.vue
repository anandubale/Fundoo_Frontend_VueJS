<template>
  <div class="home">
    <GetAllNotes></GetAllNotes>
  </div>
</template>

<script>
// @ is an alias to /src
import GetAllNotes from '../components/GetAllNotes.vue'

export default {
  name: 'GetNotes',
  components: {
    GetAllNotes
  }
}
</script>
