import "../styles/home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import {OptionsKey } from  '../config/key'

export default function Home() {
  const [movies, setMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTA3NGFiZTBkYzc2Mzc5NGU2NjgwZTBkYWFlN2ZjYiIsInN1YiI6IjY1ZjJlOWRjNDcwZWFkMDE3ZTlmYjE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCymMl6ijSf6NWXbVOBrEEkTh9zjTJewTTiq0b_XE2Q",
    },
  };

  const imagePath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/popular?language=pt-BR&page=1', options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
    }, []);
    console.log(movies);
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/detailSeries/${movie.id}`}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </li>
          );
        })}
        ;
      </ul>
    </div>
  );
}
