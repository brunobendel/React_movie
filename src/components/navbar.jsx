import { Link } from 'react-router-dom'
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='icon'>
        BENDEL&apos;S MOVIES
      </Link>
      <ul>
        <Link to='/'>Home</Link>
        {/* <Link to='/about'>Sobre</Link>
        <Link to='/profile'>Perfil</Link> */}
      </ul>
    </nav>
  )
}

