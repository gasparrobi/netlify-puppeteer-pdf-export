<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <button type="button" @click="onClick">get pdf</button>
    <a ref="link" :href="url" target="_blank"></a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      url: ""
    };
  },

  methods: {
    async onClick() {
      const response = await axios.get("/.netlify/functions/index", {
        responseType: "blob"
      });

      this.url = window.URL.createObjectURL(
        new Blob([response.body], { type: "application/pdf" })
      );
      this.$refs.link.click();
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
