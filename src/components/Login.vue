<template>
  <div class="card">
    <v-container grid-list-xl text-xs-center>
      <v-layout row wrap>
        <v-flex xs6 offset-xs3>
          <v-card class="mx-auto text" max-width="600">
            <v-img class="white--text align-end color" height="5px" />

            <h2>Login</h2>

            <v-card-text class="text--primary">
              <v-form>
                <v-text-field
                  v-model="login.email"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="login.password"
                  label="******"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-btn class="mb-3" color="primary" @click="logItIn" rounded
              >Login</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>import axios from "axios";
export default {
  data() {
    return { login: { email: "", password: "" } };
  },
  methods: {
    logItIn() {
      axios.post("http://weblloapi.dev/login", this.login).then(response => {
        let newToken = response.data.user.api_token;
        window.token = newToken;
        let user = response.data.user;
        localStorage.setItem("token", newToken);
        localStorage.setItem("user", JSON.stringify(user));

        window.axios.defaults.params = { api_token: newToken };
        Event.$emit("login", user);

        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="css" scoped>
.card {
  padding: 70px 0px;
}
.btn__p100 {
  width: 100%;
}
.color {
  background: blue;
}
.text {
  text-align: center;
}
</style>
