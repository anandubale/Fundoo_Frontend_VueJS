<template>
<div>
  <CreatingNotes/>
  <DisplayNotes v-bind:AllNotes="NotesArray"/>
  <router-view></router-view>
</div>

</template>

<script>
import CreatingNotes from './CreateNotes.vue'
import DisplayNotes from './DisplayNotes.vue'
import { GetAllThenotes } from '../services/UserService'

export default {
  name: 'GetAllNotes',
  components: {
    CreatingNotes,
    DisplayNotes
  },
  data () {
    return {
      NotesArray: []
    }
  },
  methods: {
    GetAllNote () {
      console.log('getallnotes called')
      GetAllThenotes().then((res) => {
        console.log(res.data.data)
        this.NotesArray = res.data.data
        console.log(this.NotesArray)
      })
        .catch((err) => { console.log(err) })
    }
  },

  mounted () {
    console.log('test')
    this.GetAllNote()
  }

}
</script>

<style>
</style>