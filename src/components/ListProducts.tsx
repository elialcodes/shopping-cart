import { Link } from 'react-router-dom';
import '../styles/ListProducts.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import { useCart } from '../hooks/useCart.tsx'; //importamos el hook
import useProduct from '../hooks/useProducts.ts'; //importamos el hook con el useQuery

interface LisProductsProps {
  products: AllProducts;
}

function ListProducts({ products }: LisProductsProps) {
  //tomamos lo que nos interesa de useQuery
  const { isLoading, isError, error } = useProduct();

  //importamos lo que nos iteresa del hook useCart
  const { cart, addToCart, removeFromCart } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        {/* TS no nos asegura que Error tenga la instancia error son su propiedad 
        message, así que lo verificamos y si es así, accedemos a message. */}
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );

  //función que devolverá true o false para verificar si el artículo seleccionado
  //por el usuario está en el carrito de compras
  const checkProductInCart = (product: Product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {/* renderizamos los productos  */}
        {products.map(product => {
          //aprovechamos el bucle con cada producto para hacer una constante true o
          //false ejecutando la función checkProductInCart, porque, si el
          //producto está o no en el carrito se renderizará de una manera u otra
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <Link to={`/productDetail/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
              </Link>
              <div className="product-information">
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>

                <button
                  className={isProductInCart ? 'inCart' : 'notInCar'}
                  onClick={() => {
                    {
                      /*renderizado condicional para borrar o añadir en el carro
                    desde la lista de productos*/
                    }
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {/* renderizado condicional para mostrar un icono u otro */}
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ListProducts;
