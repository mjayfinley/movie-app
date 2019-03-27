const express = require("express");
const router = express.Router();
const uuidv1 = require("uuid/v1");

let movies = [
  {
    id: 0,
    title: "Batman Begins",
    description:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    genre: "action",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX750_AL_.jpg"
  },
  {
    id: 1,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: "adventure",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
  },
  {
    id: 2,
    title: "The Dark Knight Rises",
    description:
      "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.",
    genre: "thriller",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg"
  }
];
router.get("/api/moviehes", (req, res) => {
  res.send(movies);
});

// /movies get
router.get("/movies", (req, res) => {
  res.render("index", { movies: movies });
});

router.get("/add-movie", (req, res) => {
  res.render("add-movie");
});
// /movies post
router.post("/add-movie", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let genre = req.body.genre;
  let posterURL = req.body.posterURL;

  let movie = {
    id: uuidv1(),
    title: title,
    description: description,
    genre: genre,
    posterURL: posterURL
  };

  movies.push(movie);
  res.redirect("/movies");
});

// /delete-movie
router.post("/delete-movie", (req, res) => {
  console.log(req.body);
  let movieID = req.body.id;

  movies = movies.filter(function(movie) {
    return movie.id != movieID;
  });

  res.redirect("/movies");
});

// /movies/:movieId

// /movies/:genre
router.get("/movies/:genre", (req, res) => {
  let genre = req.params.genre;

  let filteredMovies = movies.filter(function(movie) {
    return movie.genre == genre;
  });

  res.render("index", { movies: filteredMovies });
});

module.exports = router;
