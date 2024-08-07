import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart.ts';
import CartButton from './CartButton.tsx';
import '../styles/Header.css';

function Header(): JSX.Element {
  //importamos lo que nos interesa del hook useCart
  const { showedCart, displayCart } = useCart();

  //creamos una función para que, estando el carrito desplegado,
  //si tocamos en el h1, se esconda el carrito
  const removeDisplayCart = () => {
    if (showedCart === false) {
      return;
    } else {
      displayCart();
    }
  };
  return (
    <header>
      <Link to="/" onClick={() => removeDisplayCart()}>
        <h1>My Shop</h1>
      </Link>
      <CartButton />
    </header>
  );
}

export default Header;
