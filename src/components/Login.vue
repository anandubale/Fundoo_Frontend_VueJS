<template>
  <div class="main_center_div">
      <div class="central_box">
          <div class="class_with_padding">
              <div class="center_first_three">
                    <div class="Logo_box"><img src="../assets/google_logo.svg" alt="Google" width="74" height="24"></div>
                    <div class="top_text_fill">
                        <h4>Sign in</h4>
                    </div>
                    <span> to continue to Fundoo Notes</span>
                </div>

                <div>
                    <v-form>
                        <v-row>
                        <v-col cols="10" sm="6" md="12" >
                            <v-text-field label="Email or phone" outlined  class="Adjustment" v-model="loginDetails.emailID"></v-text-field></v-col>

                        <v-col cols="10" sm="6" md="12">
                            <v-text-field label="Password" outlined  class="Adjustment" v-model="loginDetails.password"></v-text-field>
                        </v-col>

                            <a href="http://localhost:8080/forget" class="Forget_password" width="368" height= "20">Forget password</a>

                        <div class="button" width="376" height="68">
                            <a href="http://localhost:8080/signup">Create account</a>
                            <div>
                                <v-col class="justify-end" cols="12" sm="6" md= "12">
                                <v-btn color="primary" elevation="1" medium @click="Userlogin ">Next</v-btn></v-col>
                            </div>
                        </div>
                        </v-row>
                    </v-form>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { login } from '../services/UserService'

export default {
  name: 'LoginUI',
  data () {
    return {
      loginDetails: {
        emailID: '',
        password: ''
      }
    }
  },
  methods: {
    Userlogin () {
      const formData = {
        emailID: this.loginDetails.emailID,
        password: this.loginDetails.password
      }
      console.log(formData)
      login(formData).then((res) => {
        console.log('Successfull:-', res)
        localStorage.setItem('token', 'Bearer ' + res.data.data)
        // this.$router.push('home/notes')
        window.location.href = 'http://localhost:8080/home'
      })
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
  height: 416px + 48px + 36px;
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

.Forget_password{
    font-size: 14px;
    font-weight: 500;
    padding: 9px 0 3px 12px;
}

.center_first_three{

    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    text-align: center;
}

.button{

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin-top: 26px;
    margin-left: -8px;
}

.button a {
    padding-left: 20px;
    font-weight: 500;
}
</style>