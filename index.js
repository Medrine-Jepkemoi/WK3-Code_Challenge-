document.addEventListener("DOMContentLoaded", (e) => {
  const menu = document.querySelector("#movieMenu");

  //function to render one film
  function renderOneFilm(film) {
    //list all movies in the menu
    const list = document.querySelector("#films .filmItem");
    list.textContent += film.title;
  }

  //get request function
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((film) => {
        renderOneFilm(film);
      });
    });
});
