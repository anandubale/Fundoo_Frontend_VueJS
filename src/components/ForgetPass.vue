<template>
  <div class="main_center_div">
      <div class="central_box">
          <div class="class_with_padding">
              <div class="center_first_three">
                    <div class="Logo_box"><img src="../assets/google_logo.svg" alt="Google" width="74" height="24"></div>
                    <div class="top_text_fill">
                        <h4>Forget Password</h4>
                    </div>
                    <span>Enter your phone number or recovery email</span>
                </div>

                <div>
                    <v-form>
                        <v-col cols="10" sm="6" md="12" >
                            <v-text-field label="Email or phone" outlined  class="Adjustment" v-model="Details.emailID"></v-text-field></v-col>

                        <div class="button" width="376" height="68">
                            <div>
                                <v-col class="justify-end" cols="12" sm="6" md= "12">
                                <v-btn color="primary" elevation="1" medium  @click="ForgetPass">Next</v-btn></v-col>
                            </div>
                        </div>
                    </v-form>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { forgetPass } from '@/services/UserService'

export default {
  name: 'ForgetPass',
  data () {
    return {
      Details: {
        emailID: ''
      }
    }
  },
  methods: {
    ForgetPass () {
      const formData = {
        emailID: this.Details.emailID
      }
      console.log(formData)
      forgetPass(formData).then((res) => { console.log('Successfull:-', res) })
        .catch((err) => { console.log(err) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

body{
    background: #fff;
    direction: ltr;
    margin: 0;
    padding: 0;
    color: #212124;
}

.main_center_div{

    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 10%;
}

.central_box{

  width: 368px + 80px;
  height: 418px + 48px + 36px;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #c2c2ca;
  border-radius: 8px;
  box-sizing: border-box;

}

.top_text_fill{

    width: 368px;
    height: 64px;
    padding-top: 16px;
    box-sizing: border-box;
}

.Adjustment{

    width: 366px !important;
    height: 22px !important;
    margin: 20px 0 20px 0 !important;
}

.center_first_three{

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
}

.button{

    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
    margin-top: 26px;
    margin-left: -8px;
}
</style>