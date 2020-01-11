const app = new Vue({
  el: '#app',
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
});