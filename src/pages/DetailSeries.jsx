import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/details.css";

export default function DetailSeries() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTA3NGFiZTBkYzc2Mzc5NGU2NjgwZTBkYWFlN2ZjYiIsInN1YiI6IjY1ZjJlOWRjNDcwZWFkMDE3ZTlmYjE0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VCymMl6ijSf6NWXbVOBrEEkTh9zjTJewTTiq0b_XE2Q",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR`, options)
      .then((response) => response.json())
      .then((data) => {
        const { name, poster_path, first_air_date, overview } = data;
        const movie = {
          id,
          name,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          first_air_date: first_air_date,
        };
        setMovie(movie);
      });
  }, [id]);

  return (
    <ul>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Data Lançamento : {movie.first_air_date}
          </span>
          <Link to="/about">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </ul>
  );
}
