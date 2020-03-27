<template>
  <div>
    <v-app-bar color="deep-blue accent-4" dense light>
      <v-toolbar-title>Techkrunch</v-toolbar-title>

      <v-spacer></v-spacer>
      <div>
        <v-col>
          <v-btn to="/Home" text>
            <span class="mr-2">Home</span>
          </v-btn>
          <v-btn to="/Login" text>
            <span class="mr-2">Login</span>
          </v-btn>
          <v-btn to="/Register" text>
            <span class="mr-2">Register</span>
          </v-btn>
          <v-btn to="/About" text>
            <span class="mr-2">About</span>
          </v-btn>
        </v-col>
      </div>

      
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style scoped></style>
