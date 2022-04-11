<template>
<div>
  <v-container class="navigation_bar">
    <v-app-bar elevation="1" color="white" class="pa-2" absolute>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="ma-2"></v-app-bar-nav-icon>
      <img class="mr-3" :src="require('../assets/keep_logo.png')" height="35" />
      <v-toolbar-title>Fundoo Notes</v-toolbar-title>
      <v-spacer></v-spacer>
       <v-col cols="8">
        <v-text-field
          solo
          label="Search"
          prepend-inner-icon="mdi-magnify"
          hide-details
          class="color ma-1 pa-0"
        ></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <div class="right_side_logos">
        <img class="ma-3" :src="require('../assets/refresh.svg')" />
        <img class="ma-3" :src="require('../assets/view.svg')" />
        <img class="ma-3" :src="require('../assets/Setting.svg')" />
      </div>
    </v-app-bar>
  </v-container>
  <v-divider />
  <v-row>
  <v-col cols="12" md="3">
  <v-card class="ml-0 pl-2" height="296" width="280" flat tile>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        elevation=0
      >
      <v-list shaped nav >
        <v-list-item-group
          tile
          flat
        >
          <v-list-item color="yellow darken-2">
             <v-icon class="ml-2 mr-6">mdi-lightbulb</v-icon>
            <v-list-item-title >Notes</v-list-item-title>
          </v-list-item>

          <v-list-item color="yellow darken-2">
             <v-icon class="ml-2 mr-6">mdi-bell-outline</v-icon>
            <v-list-item-title>Label</v-list-item-title>
          </v-list-item>

          <v-list-item color="yellow darken-2">
             <v-icon class="ml-2 mr-6">mdi-pencil</v-icon>
            <v-list-item-title>Edit labels</v-list-item-title>
          </v-list-item>

          <v-list-item color="yellow darken-2">
             <v-icon class="ml-2 mr-6">mdi-package-down</v-icon>
            <v-list-item-title>Archive</v-list-item-title>
          </v-list-item>

          <v-list-item color="yellow darken-2">
             <v-icon class="ml-2 mr-6">mdi-delete-outline</v-icon>
            <v-list-item-title>Trash</v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
  </v-col>
  </v-row>
  </div>
</template>

<script>
// import CreateNotes from './notes.vue'
// import GetAllNotes from '../components/GetAllNotes.vue'

export default {
  name: 'navigationBar',
  components: {
    // CreateNotes
    // GetAllNotes
  },

  data: () => {
    return {
      drawer: false
    }
  },

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.main_box{
  padding: 0;
  margin: 0;
}
.navigation_bar {
  margin: 0;
  padding: 0;
  width: 1269px;
  height: 48px;
}

/deep/ div.v-toolbar__content {
  height: 48px !important;
}

/deep/ .v-toolbar__content {
  padding: 0px !important;
}

/* .parent-class >>> .v-toolbar__content {
      padding: 0px !important;
} */

/deep/ .v-toolbar__extension {
  padding: 0px !important;
}

/deep/ .v-text-field {
  width: 617px;
}

.right_side_logos {
  display: flex;
  flex-direction: row;
}

.v-list-item-title{
  color: #202124 !important;
  font-family: 'Roboto', sans-serif !important;
}

.CreateNew{

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;

}

/deep/ v-list v-sheet v-sheet--shaped theme--light v-list--dense v-list--nav{
  margin:20px !important;
}

/* /deep/ v-overlay__scrim{
  margin:10px;
} */
</style>