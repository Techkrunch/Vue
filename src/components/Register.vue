<template>
  <div class="card">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <v-card class="mx-auto text" max-width="600">
            <v-img class="white--text align-end color" height="5px" />

            <h2>Account Creation</h2>

            <v-card-text class="text--primary">
              <v-form>
                <v-text-field
                  v-model="register.email"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="register.password"
                  label="******"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-btn class="mb-3" color="primary" rounded @click="registerIt"
              >Register</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      register: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    registerIt() {
      axios.post("", this.register).then(response => {
        let token = response.data.user.api_token;

        localStorage.setItem("token", token);
      });
    }
  },
  mounted() {}
};
</script>

<style lang="css" scoped>
.center {
  padding: 80px 0px;
  text-align: center;
  display: inline-block;
}
.card {
  padding: 70px 0px;
}
.btn__p100 {
  width: 100%;
}
.color {
  background: darkgreen;
}
.text {
  text-align: center;
}
</style>
