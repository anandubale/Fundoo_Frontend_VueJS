<template>
  <div class="main_center_div">
      <div class="central_box">
          <div class="class_with_padding">
              <div class="center_first_three">
                    <div class="Logo_box"><img src="../assets/google_logo.svg" alt="Google" width="74" height="24"></div>
                    <div class="top_text_fill">
                        <h4>Reset your Password</h4>
                    </div>
                    <span>Enter new Password</span>
                </div>

                <div>
                    <v-form>
                          <!-- <v-row>
                        <v-col>
                        <v-text-field
                        v-model="register.password"
                        label="Password"
                        name="password"
                        type="password"
                        :rules="register.passwordRules"
                        outlined/>
                        </v-col>

                        <v-col>
                        <v-text-field
                        v-model="register.confirmPassword"
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        :rules="register.confirmPasswordRules"
                        outlined/>
                        </v-col>
                        </v-row> -->
                        <v-col cols="10" sm="6" md="12" >
                            <v-text-field label="Enter New Password" outlined  class="Adjustment"></v-text-field></v-col>

                        <v-col cols="10" sm="6" md="12" >
                            <v-text-field label="Re-Enter Password" outlined  class="Adjustment"></v-text-field></v-col>

                        <div class="button" width="376" height="68">
                            <div>
                                <v-col class="justify-end" cols="12" sm="6" md= "12">
                                <v-btn color="primary" elevation="1" medium>Next</v-btn></v-col>
                            </div>
                        </div>
                    </v-form>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPass'
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