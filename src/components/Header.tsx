import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header(): JSX.Element {
  return (
    <header>
      <Link to="/">
        <h1>My Shop</h1>
      </Link>
    </header>
  );
}

export default Header;
