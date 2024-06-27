import { CartIcon, ClearCartIcon } from './icons.tsx';
import { useId } from 'react';
import '../styles/Cart.css';

function Cart(): JSX.Element {
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} />
      <aside className="cart">
        <ul>
          <li>
            <img src="" alt="" />
            <div>
              <strong></strong>
            </div>
            <footer>
              <small>Qty: </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Cart;
