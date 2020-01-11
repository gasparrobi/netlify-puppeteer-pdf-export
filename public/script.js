const axios = require("axios");

document.querySelector('button[type="submit"]').addEventListener("click", e => {
  e.preventDefault();

  axios({
    url: "/.netlify/functions/index",
    method: "GET",
    responseType: "blob" // important
  }).then(response => {
    const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.click();
  });
});
