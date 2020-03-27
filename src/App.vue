<template>
  <v-content> 
    <Header />
    <v-app>
      <router-view></router-view> 
   </v-app>
   
  </v-content>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header
  },

  data() {
    return {};
  }
};
</script>
 