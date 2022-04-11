<template>
<v-layout row wrap >
  <v-flex v-for="note in AllNotes" :key="note._id" ma-3 class="NoteClass">
  <v-hover v-slot="{ hover }">
    <v-card
      @click.stop="note.dialog = true"
      class="ma-2 pa-2 "
      outlined
      :class="{ 'on-hover': hover }"
    >
      <v-list-item class="v-list">{{ note.Title }}</v-list-item>
      <v-list-item class="v-list">{{ note.Descreption }}</v-list-item>
      <v-list-item></v-list-item>
      <v-flex>
        <DialogueNote ref="dialog" :transaction="note"></DialogueNote>
      </v-flex>
    </v-card>
  </v-hover>
  </v-flex>

</v-layout>
  <!-- <div class="Display_note_box">
  <div v-for="note in AllNotes" :key="note.id" elevation=0 class="NoteClass">
  <div>
    <div>{{note.Title}}</div>
    <div>{{note.Descreption}}</div>
  </div>
  </div>
    <v-flex>
      <Dialogue ref="dialogue"  :note="item"></Dialogue>
    </v-flex>
</div> -->
</template>

<script>
import DialogueNote from './UpdateNotes.vue'
export default {
  name: 'DisplayNotes',
  data () {
    return {
      notes: [],
      click: false
    }
  },
  props: ['AllNotes'],
  methods: {
    // updateGivenNote () {
    //   const noteInput = {
    //     title: this.editTransaction.title,
    //     description: this.editTransaction.description
    //   }
    // }
  },
  components: {
    DialogueNote
  }
}
</script>

<style>
.Display_note_box {
  padding: 10px 65px 10px 65px;
}

.NoteClass {
  width: 345px !important;
  height: 220px !important;
  padding: 3px !important;
  margin: 12px !important;
  display: inline-block !important;
  border: 1px solid black !important;
  border-radius: 5px !important;
}

/deep/ .v-application{
  margin: 0 !important;
  padding: 0 !important;
}

/* /deep/ .v-list-item.theme--light v-list-item {
  min-height: 0 !important;
} */
</style>
