import { CartIcon } from './icons.tsx';
import { useCart } from '../hooks/useCart.ts';
import '../styles/CartButton.css';

function CartButton(): JSX.Element {
  //importamos todo lo que necesitamos del hook
  const { displayCart, totalUnitCart } = useCart();

  return (
    <div className="container-cart-button">
      <button className="cart-button" onClick={() => displayCart()}>
        <CartIcon />
      </button>
      <span className="units-cart">{totalUnitCart}</span>
    </div>
  );
}

export default CartButton;
