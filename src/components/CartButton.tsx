import { CartIcon } from './icons.tsx';
import { useCart } from '../hooks/useCart.ts';
import '../styles/CartButton.css';

function CartButton(): JSX.Element {
  //importamos todo lo que necesitamos del hook
  const { displayCart, cart } = useCart();
  return (
    <div className="container-cart-button">
      <button className="cart-button" onClick={() => displayCart()}>
        <CartIcon />
      </button>
      <button className="units-cart">{cart.length}</button>
    </div>
  );
}

export default CartButton;
