/* eslint-disable jsx-a11y/label-has-associated-control */
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './icons.tsx';
import { useCart } from '../hooks/useCart.tsx';
import { useId } from 'react';
import '../styles/Cart.css';

function Cart(): JSX.Element {
  const cartCheckboxId = useId(); //damos un id único al input del return

  //importamos todo lo que necesitamos del hook
  const {
    cart,
    addToCart,
    decrementQuantityFromCart,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      {/* nos ayudamos de la etiqueta hermana input (que está oculta), para que,
      si está checked se despliegue la otra etiqueta hermana, el aside 
      (ver css del componente) */}
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
                {/* función addToCart para sincronizar con el listado total*/}
                <button onClick={() => addToCart(product)}>+</button>
                {product.quantity !== undefined && product.quantity > 1 && (
                  <button onClick={() => decrementQuantityFromCart(product)}>
                    -
                  </button>
                )}
                <button onClick={() => removeFromCart(product)}>
                  <RemoveFromCartIcon />
                </button>
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
