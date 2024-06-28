import { CartIcon, ClearCartIcon } from './icons.tsx';
import { useCart } from '../hooks/useCart.tsx';
import { useId } from 'react';
import '../styles/Cart.css';

// function cartItem(product, addToCart) {
//   return (
//     <li>
//       <img src={product.thumbnail} alt={product.title} />
//       <div>
//         <strong>{product.title}</strong> - ${product.price}
//       </div>
//       <footer>
//         <small>Qty: 1</small>
//         <button onClick={addToCart}>+</button>
//       </footer>
//     </li>
//   );
// }

function Cart(): JSX.Element {
  const cartCheckboxId = useId();
  const { cart, addToCart, clearCart } = useCart();
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
                <small>Qty: 1</small>
                {/* pasamos la función addToCart para sincronizar con el listado total */}
                <button onClick={addToCart}>+</button>
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
