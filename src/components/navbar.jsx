import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { BiCameraMovie } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="icon">
        <BiCameraMovie />
        BENDEL&apos;S MOVIES
      </Link>
      <ul>
        <Link to="/">Filmes</Link>
        <Link to="/about">Series</Link>
        <Link to="/profile">Perfil</Link>
      </ul>
    </nav>
  );
}
