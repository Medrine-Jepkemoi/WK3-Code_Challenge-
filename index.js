document.addEventListener("DOMContentLoaded", (e) => {
  renderOneFilm();
});

//get request function
function renderOneFilm() {
  fetch("http://localhost:3000/films")
    .then((res) => res.json)
    .then((res) => console.log(res));
}
