import { CartIcon } from './icons.tsx';
import { useCart } from '../hooks/useCart.tsx';
import '../styles/CartButton.css';

function CartButton(): JSX.Element {
  //importamos todo lo que necesitamos del hook
  const { displayCart } = useCart();
  return (
    <button className="cart-button" onClick={() => displayCart()}>
      <CartIcon />
    </button>
  );
}

export default CartButton;
