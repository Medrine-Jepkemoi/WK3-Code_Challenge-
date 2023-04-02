document.addEventListener("DOMContentLoaded", (e) => {
  const menu = document.querySelector("#movieMenu");

  //function to render one film
  function renderOneFilm(film) {
    //list all movies in the menu
    const list = document.querySelector("#films");
    list.innerHTML += `
    <li class="filmItem">${film.title}</li>
    `;
  }

  //function to renter the first movie's details
  function renderFirstMovieDetails(data) {
    const availableTickets = data.capacity - data.tickets_sold;
    const firstDetails = document.querySelector("#firstMovie");
    firstDetails.innerHTML = `

      <div id="firstMovieDetails">
        <h3 style="margin-bottom: 20px;">${data.title}</h3>
        <p style="font-size: 12px; margin-bottom: 8px;">${data.description}</p>
        <p style="font-size: 12px; margin-bottom: 8px;">Runtime: ${data.runtime}</p>
        <p style="font-size: 12px; margin-bottom: 8px;">Showtime: ${data.showtime}</p>
        <p id="availableTickets" style="font-size: 12px; margin-bottom: 8px;">Available Tickets: ${availableTickets}</p>
        
      </div>
       `;
  }

  //get request function
  fetch("http://localhost:3000/films")
    .then((res) => res.json())
    .then((data) => {
      //populating movie list
      data.forEach((film) => {
        renderOneFilm(film);
      });
      //populating first movie details
      renderFirstMovieDetails(data[0]);
    });
});
