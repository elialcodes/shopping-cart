import { Link } from 'react-router-dom';
import CartButton from './CartButton.tsx';
import '../styles/Header.css';

function Header(): JSX.Element {
  return (
    <header>
      <Link to="/">
        <h1>My Shop</h1>
      </Link>
      <CartButton />
    </header>
  );
}

export default Header;
