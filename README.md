# WEEK THREE CODE CHALLENGE

#### About

Third code challenge under phase 1 to test my understanding of CURD in json

## Description

This code challenge is testing on my understanding of json and CURD. A user of the site is expected to see and do the following:

1. See the first movie's details, including its **poster, title, runtime, showtime, and available tickets** when the page loads. The number of available tickets will need to be derived by subtracting the number of `tickets_sold` from the theater's `capacity`.
2. See a menu of all movies on the left side of the page in the `ul#films` element when the page loads.
3. Buy a ticket for a movie. After clicking the "Buy Ticket" button, they should see the number of available tickets decreasing on the frontend. They should not be able to buy a ticket if the showing is sold out (if there are 0 tickets available).
4. They shiuld click on a movie in the menu to replace the currently displayed movie's details with the new movie's details.
5. When a movie is sold out (when there are no available tickets remaining), it should indicate that the movie is sold out by changing the button text to "Sold Out".

## Setup/Installation Requirements

To access my site:

1. Clone the repository into a desired folder.
2. Open the now local repository to access the code
3. Open / run the live server to be able to use the site. Once on the site, interact with it by clicking on the list to view a description of the data. Click on the buy ticket button to purchase a ticket.

## Technologies Used

Javascript, HTML, CSS

## Author

Medrine Jepkemoi - jepkemoimedrine@gmail.com

### License

MIT License

Copyright (c) 2023 Medrine-Jepkemoi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
