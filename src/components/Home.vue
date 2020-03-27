<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
        <v-img
          :src="require('../../assets/transparent.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-layout justify-center>
        <h1>Landing Page</h1>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({})
};
</script>
