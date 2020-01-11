document.querySelector('button[type="submit"]').addEventListener("click", e => {
  e.preventDefault();

  const options = {
    method: "GET"
    // headers: { "Content-Type": "application/json; charset=utf-8" },
    // body: JSON.stringify({ pageToScreenshot: pageToScreenshot })
  };

  fetch("/.netlify/functions/index", options)
    .then(response => {
      const url = window.URL.createObjectURL(new Blob([response.body], { type: "application/pdf" }));
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.click();
    })
    .catch(err => {
      console.log(err);
    });
});
