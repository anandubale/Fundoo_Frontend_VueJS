<template>
<v-dialog v-model="dialog" >
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on" pa-3>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card class="Dialog_card mx-auto pt-4" >
      <v-card-text>
        <v-form >
          <v-text-field solo label="_id" v-model="updatedNote._id" v-show = false></v-text-field>
          <v-text-field solo label="Title" v-model="updatedNote.Title" required></v-text-field>
          <v-text-field solo label="Descreption" v-model="updatedNote.Descreption"></v-text-field>
           <v-btn text  @click="updateNoteDetails()">
                <v-text>close</v-text>
            </v-btn>
        </v-form>
      </v-card-text>
      <navigationBar v-show=false ref="navigationBar"/>
    </v-card>
  </v-dialog>

</template>

<script>
import { Updatenotes } from '../services/UserService'

export default {
  name: 'DialogueNote',
  props: ['transaction'],
  data () {
    return {
      dialog: false,
      updatedNote: this.transaction
    }
  },
  methods: {
    updateNoteDetails () {
      const notedata = {
        title: this.updatedNote.Title,
        description: this.updatedNote.Descreption
      }
      console.log(notedata)
      Updatenotes(notedata, this.updatedNote._id).then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
    }
  }
}
</script>

<style scoped>

.Dialog_card{
   width: 506px !important;
  height: 230px !important;
}
</style>
