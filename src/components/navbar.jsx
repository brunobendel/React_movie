import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/react_movie" className="icon">
        BENDEL&apos;S MOVIES
      </Link>
      <ul>
        <Link to="/react_movie">Filmes</Link>
        <Link to='/series'>Series</Link>
        <Link to='/profile'>Perfil</Link>
      </ul>
    </nav>
  );
}
