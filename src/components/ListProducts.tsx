import { Link } from 'react-router-dom';
import Filters from './Filters';
import '../styles/ListProducts.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import { useCart } from '../hooks/useCart.ts'; //importamos el hook
import useProduct from '../hooks/useProducts.ts'; //importamos el hook con el useQuery
import LazyImage from './LazyImage.tsx';

interface LisProductsProps {
  products: AllProducts;
  maxPrice: number;
}

function ListProducts({ products, maxPrice }: LisProductsProps) {
  //tomamos lo que nos interesa de useQuery
  const { isLoading, isError, error } = useProduct();

  //importamos lo que nos iteresa del hook useCart
  const { cart, addToCart, removeFromCart } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        {/* TS no nos asegura que error sea instancia del objeto Error,  
        así que lo verificamos y si es así, accedemos a propiedad message. */}
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );

  //función que devolverá true o false para verificar si el artículo seleccionado
  //por el usuario está en el carrito de compras
  const checkProductInCart = (product: Product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <>
      <section>
        <Filters maxPrice={maxPrice} />
      </section>
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
                <Link to={`/detailProduct/${product.id}`}>
                  <LazyImage
                    src={product.thumbnail}
                    alt={product.title}
                    placeholder="http://via.placeholder.com/"
                  />
                </Link>
                <div>
                  <span>
                    <strong>{product.title}</strong> - ${product.price}
                  </span>
                </div>

                <button
                  className={isProductInCart ? 'inCart' : 'notInCar'}
                  onClick={() => {
                    {
                      /*renderizado condicional para llamar a una u otra función:
                      borrar o añadir al carro desde la lista de productos*/
                    }
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {/* renderizado condicional para mostrar un icono u otro */}
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default ListProducts;
