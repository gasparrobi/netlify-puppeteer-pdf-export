document.querySelector('button[type="submit"]').addEventListener("click", e => {
  e.preventDefault();

  const options = {
    method: "GET"
    // headers: { "Content-Type": "application/json; charset=utf-8" },
    // body: JSON.stringify({ pageToScreenshot: pageToScreenshot })
  };

  fetch("/.netlify/functions", options)
    .then(res => console.log(res))
    .catch(err => {
      console.log(err);
    });
});
