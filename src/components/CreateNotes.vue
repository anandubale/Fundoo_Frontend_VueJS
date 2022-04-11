<template>
<v-overlap>
  <div class="main_Note_box">
    <v-container class="CreateNew">
      <v-card elevation="10" class="mx-auto pl-3" height="150" width="568">
        <v-text-field
          placeholder="Title"
          pl-3
          v-model="noteDetails.Title"
          solo
          flat
          hide-details
        ></v-text-field>
        <v-text-field
          placeholder="take a note.."
          class="pt-0"
          v-model="noteDetails.Descreption"
          solo
          flat
          hide-details
        ></v-text-field>
        <v-card class="functionity_setup" elevation="0">
          <v-card class="CN_Functions mx-auto" elevation="0">
            <v-list>
              <v-list-item-group link flat>
                <v-icon class="px-3 ma-0">mdi-bell-plus</v-icon>
                <v-icon class="px-3 ma-0">mdi-account-plus</v-icon>
                <v-icon class="px-3 ma-0">mdi-palette</v-icon>
                <v-icon class="px-3 ma-0">mdi-image-plus</v-icon>
                <v-icon class="px-3 ma-0">mdi-package-down</v-icon>
                <v-icon class="px-3 ma-0">mdi-dots-vertical</v-icon>
                <v-icon class="px-3 ma-0">mdi-undo</v-icon>
                <v-icon class="px-3 ma-0">mdi-redo</v-icon>
              </v-list-item-group>
            </v-list>
          </v-card>
          <v-card elevation="0" class="pr-3"><v-btn small color="white" elevation="0" @click="CreateNotes()">close</v-btn></v-card>
          <!-- <div>
            <pre>
              {{ JSON.stringify(noteDetails, null, 2) }}
            </pre>
          </div> -->
        </v-card>
      </v-card>
    </v-container>
  </div>
</v-overlap>
</template>

<script>
import { Create } from '../services/UserService'

export default {
  name: 'CreatingNotes',
  data () {
    return {
      noteDetails: {
        Title: '',
        Descreption: ''
      }
    }
  },
  methods: {
    CreateNotes () {
      const noteData = {
        Title: this.noteDetails.Title,
        Descreption: this.noteDetails.Descreption
      }
      console.log(noteData)
      Create(noteData)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

/deep/ .v-messages.theme--light {
  margin: 0px !important;
  padding: 0px !important;
}

.main_Note_box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  /* padding-top: 100px; */
}

.CN_Functions {
  width: 497px;
  height: 35px;
  padding-top: 2px;
}

.functionity_setup {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
}

/deep/ .v-text-field.v-text-field--solo .v-input__control {
  margin: 0px !important;
  padding: 0px !important;
}

/deep/ .v-input_slot {
  margin: 0px !important;
  padding: 0px !important;
}
</style>