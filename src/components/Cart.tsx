/* eslint-disable jsx-a11y/label-has-associated-control */
import { CartIcon, ClearCartIcon } from './icons.tsx';
import { useCart } from '../hooks/useCart.tsx';
import { useId } from 'react';
import '../styles/Cart.css';

function Cart(): JSX.Element {
  const cartCheckboxId = useId();
  const { cart, addToCart, decrementQuantityFromCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <footer>
                <small>Qty: {product.quantity}</small>
                {/* pasamos la función addToCart para sincronizar con el listado total */}
                <button onClick={() => addToCart(product)}>+</button>
                {product.quantity !== undefined && product.quantity > 1 && (
                  <button onClick={() => decrementQuantityFromCart(product)}>
                    -
                  </button>
                )}
              </footer>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}

export default Cart;
