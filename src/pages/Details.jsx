import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/details.css";

export default function Details() {
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
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options)
      .then((response) => response.json())
      .then((data) => {
        const { title, poster_path, release_date, overview } = data;
        const movie = {
          id,
          title,
          image: `${imagePath}${poster_path}`,
          sinopse: overview,
          releaseDate: release_date,
        };
        setMovie(movie);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <ul>
      <div className="movie">
        <img src={movie.image} alt={movie.sinopse} />
        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release-date">
            Release date: {movie.releaseDate}
          </span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </ul>
  );
}
