<template>
<div class="to_Center_Div">
  <div class="central_box">
    <div class="box_with_padding">
      <div class="Left_box">

        <div class="Fundoo_logo">
          <img src="../assets/keep_logo.png" alt="Google" width="40" height="40">
          <span>Fundoo Notes</span>
        </div>

        <div class="create_tag">
          <div>
            <span>Create your Fundoo Account</span>
            </div>
        </div>

        <div class="continue_tag">
          <span>to continue to Fundoo App</span>
        </div>

        <div class="form_tag">
          <v-form>
            <v-row>
                <v-col cols="5">
                <v-text-field label="First name" outlined class="mr-2" v-model= "register.firstname"  width=" 250px" hide-details dense></v-text-field></v-col>
               <v-col cols="5">
                <v-text-field label="Last name" outlined  v-model= "register.lastname" hide-details dense></v-text-field></v-col>
            </v-row>

            <v-row >
              <v-col cols="11"><v-text-field label="Username" outlined
              hint="you can use letters, numbers and perid" key="text-narrow" v-model= "register.emailID" hide-details dense></v-text-field></v-col>
            </v-row>

            <v-row>
              <v-col>
              <v-text-field
              v-model="register.password"
              label="Password"
              name="password"
              type="password"
              :rules="passwordRules"
              class="change mr-4 pr-n2"
              outlined
              hide-details
              dense
              />
              </v-col>

            <v-col>
            <v-text-field
              v-model="register.confirmPassword"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              :rules="confirmPasswordRules"
              outlined
              hide-details
              dense
              class="ml-n2"/>
            </v-col>
            </v-row>

              <v-container class="px-0" fluid>
                    <v-checkbox
                      v-model="checkbox"
                      :label="`Show password`"
                      checkbox = ${checkbox.toString()}
                    ></v-checkbox>
              </v-container>

              <div class="button_signin">
                <div>
                   <a href="http://localhost:8080/login">Sign in instead</a>
                </div>
                <div>
               <v-btn color="primary" elevation="1" medium @click="UserRegister()">Next</v-btn>
                </div>
              </div>

          </v-form>
        </div>
      </div>
      <div class="Right_box">
        <img src="../assets/account.svg" alt="Image" width="244" height="244" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { registration } from '../services/UserService'

export default {
  name: 'RegistrationComponent',
  data () {
    return {
      register: {
        firstname: '',
        lastname: '',
        emailID: '',
        password: '',
        confirmPassword: ''
      },
      passwordRules: [
        (value) => !!value || 'Please type password.',
        (value) => (value && value.length >= 8) || 'minimum 8 characters'],
      confirmPasswordRules: [
        (value) => !!value || 'type confirm password',
        (value) => value === this.register.password || 'The password confirmation does not match.'],
      checkbox: false
    }
  },
  methods: {
    UserRegister () {
      const formData = {
        firstName: this.register.firstname,
        lastName: this.register.lastname,
        emailID: this.register.emailID,
        password: this.register.password
      }
      console.log(formData)
      registration(formData).then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');

body {
    background: #fff;
    direction: ltr;
    font-size: 14px;
    line-height: 1.4286;
    margin: 0;
    padding: 0;
    color: #212124;
}

.to_Center_Div{

  display: flex;
  justify-content: center;
  align-content: center;
  margin: 70px;;
}

.Fundoo_logo{
  padding-bottom: 5px;
}

.Fundoo_logo span {
  font-size: 25px;
  position:relative;
  top: 5px;
}

.create_tag{

  font-size: 22px;
  font-weight: 400;
  line-height: 1.3333;
  padding-top: 10px;

}

h1{
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
}

.continue_tag{
    color: #202124;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 1.5;
    padding-bottom: 0;
    padding: 8px 0 0 0;
}

.form_tag{

  width: 354px;
  height: 377px;
  padding-top: 24px;

}

.central_box {
  width: 668px ;
  height: 505px ;
  padding: 48px 40px 36px 40px;
  margin: 0;
  border-style: solid;
  border-width: 1px;
  border-color: #9a9a9c;
  border-radius: 5px;
  box-sizing: content-box;

}

.box_with_padding {
  display: flex;
}
/*
[text-narrow] {
  line-height: 1.1 !important;
}

input[type="text"] {
  width: 50%;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  margin: 5px;
  outline: none;
}

input[type="email"] {
  width: 100%;
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 6px 8px 6px 8px;
  margin: 5px;
  outline: none;
} */

.button_signin{

  display: flex ;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.Left_box {
  width: 354px;
  height: 425px;
  margin-right: 40px -40px 40px -40px;

}

.text_tag{
  width: 354px;
  height: 32px;
  padding-top: 16px;
}

.text_tag span {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.3333;
}

.FL_Name {
  display: flex;
}

.pass_div {
  display: flex;
}

.Right_box {
  width: 252px;
  height: 521px;
  padding-left: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.FL_Name {
  display: flex;
  justify-content: flex-start;
}

 /* /deep/ div.v-input__slot{
  padding: 0 !important;
  margin:0 !important;
  height: 10px !important;
  width: 153px !important;
}

/deep/ div.v-text-field__slot{
  padding: 0 !important;
  margin: 0 !important;
   height: 32px !important;
  width: 171px !important;
  } */

/deep/ input#input-10{
  padding:0px !important;
  height: 20px !important;
  width: 153px !important;
}

/deep/ input#input-7{
  padding:0px !important;
  height: 20px !important;
  width: 153px !important;
}

/* /deep/ div.v-input__control{
  padding: 0;
  margin:0;
}  */
</style>
