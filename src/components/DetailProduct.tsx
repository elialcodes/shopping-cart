import { useParams } from 'react-router-dom';
import '../styles/DetailProduct.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import { useCart } from '../hooks/useCart.tsx'; //importamos el hook
import { Link } from 'react-router-dom';

interface DetailProductProps {
  products: AllProducts;
}

function DetailProduct({ products }: DetailProductProps): JSX.Element {
  //importamos lo que nos iteresa del hook useCart
  const { cart, addToCart, removeFromCart } = useCart();

  const { id } = useParams<{ id: string }>();

  //convertir "id" a número sólo si está definido
  const productId = id ? parseInt(id) : null;

  //buscar el producto si productId es válido
  const productData = productId
    ? products.find(product => product.id === productId)
    : null;

  //renderizar un mensaje si "productData" es null
  if (!productData) {
    return <div>Producto no encontrado</div>;
  }

  //función que devolverá true o false para verificar si el artículo seleccionado
  //por el usuario está en el carrito de compras
  const checkProductInCart = (product: Product) => {
    return cart.some(item => item.id === product.id);
  };

  //metermos esa función en una variable que será true o false
  const isProductInCart = checkProductInCart(productData);

  return (
    <main>
      <Link to="/">
        <button className="button-back">Back</button>
      </Link>
      <div className="product">
        <img src={productData.thumbnail} alt={productData.title} />
        <h3>
          <strong>{productData.title}</strong> - ${productData.price}
        </h3>
        <span>{productData.brand}</span>
        <p>{productData.description}</p>
        <div className="rating">
          <span>Rating: {productData.rating}</span>
          <button
            // renderizado condicional para añadir una clase u otra y estilar el botón
            className={isProductInCart ? 'inCart' : 'notInCar'}
            onClick={() => {
              {
                /*renderizado condicional para poder borrar o añadir al carro
                desde la vista detalle de un producto*/
              }
              isProductInCart
                ? removeFromCart(productData)
                : addToCart(productData);
            }}
          >
            {/* renderizado condicional para mostrar un icono u otro */}
            {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
          </button>
        </div>
      </div>
    </main>
  );
}

export default DetailProduct;
