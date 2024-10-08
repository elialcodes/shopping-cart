import { ClearCartIcon, RemoveFromCartIcon } from './icons.tsx';
import { useCart } from '../hooks/useCart.ts';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage.tsx';
import '../styles/Cart.css';

function Cart(): JSX.Element {
  //importamos todo lo que necesitamos del hook
  const {
    cart,
    showedCart,
    displayCart,
    addToCart,
    decrementQuantityFromCart,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <>
      {/* renderizado condicional del aside, para mostrar o no el carrito */}
      <aside className={showedCart ? 'cart' : 'hidden'}>
        {cart.length === 0 && (
          <p className="empty-cart">There is no product yet</p>
        )}
        {cart.length !== 0 && (
          <>
            <ul>
              {cart.map(product => (
                <li key={product.id}>
                  <LazyImage
                    src={product.thumbnail}
                    alt={product.title}
                    placeholder="http://via.placeholder.com/"
                  />
                  {/* <img src={product.thumbnail} alt={product.title} /> */}
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div className="quantity">
                    <small>Qty: {product.quantity}</small>
                    {product.quantity !== undefined && product.quantity > 1 && (
                      <button
                        className="button-units"
                        onClick={() => decrementQuantityFromCart(product)}
                      >
                        -
                      </button>
                    )}
                    {/* función addToCart para incrementar el numero de items del cart*/}
                    <button
                      className="button-units"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                    <button
                      className="button-remove"
                      onClick={() => removeFromCart(product)}
                    >
                      <RemoveFromCartIcon />
                    </button>
                  </div>
                  <div>
                    {/* link que nos lleva a ver el detalle del producto y ejecuta 
                    displayCart para ocultar el cart */}
                    <Link to={`/detailProduct/${product.id}`}>
                      <button
                        className="button-see-product"
                        onClick={() => displayCart()}
                      >
                        See Product
                      </button>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
            <button className="clear-cart-button" onClick={clearCart}>
              <ClearCartIcon />
            </button>
          </>
        )}
      </aside>
    </>
  );
}

export default Cart;
