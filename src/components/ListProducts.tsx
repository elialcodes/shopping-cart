import '../styles/ListProducts.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import { useCart } from '../hooks/useCart.tsx'; //importamos el hook

interface LisProductsProps {
  products: AllProducts;
}

function ListProducts({ products }: LisProductsProps) {
  //importamos lo que nos iteresa del hook
  const { cart, addToCart, removeFromCart } = useCart();

  //función que devolverá true o false para verificar si el artículo seleccionado por
  //el usuario está en el carrito de compras
  const checkProductInCart = (product: Product) => {
    return cart.some(item => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {/* renderizamos los productos  */}
        {products.map(product => {
          //aprovechamos el bucle con cada producto para hacer una constante true o false
          //dependiendo de la función que comprueba si un producto está o no en el carrito
          const isProductInCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <button
                className={isProductInCart ? 'inCart' : 'notInCar'}
                onClick={() => {
                  {
                    /*renderizado condicional para borrar o añadir del carro desde la lista
                    de productos*/
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
  );
}

export default ListProducts;
