import { useParams } from 'react-router-dom';
import '../styles/DetailProduct.css';
import { AddToCartIcon, RemoveFromCartIcon } from './icons';
import { useCart } from '../hooks/useCart.tsx'; //importamos el hook

interface DetailProductProps {
  products: AllProducts;
}

function DetailProduct({ products }: DetailProductProps): JSX.Element {
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
  //importamos lo que nos iteresa del hook useCart
  const { cart, addToCart, removeFromCart } = useCart();

  //función que devolverá true o false para verificar si el artículo seleccionado
  //por el usuario está en el carrito de compras
  const checkProductInCart = (product: Product) => {
    return cart.some(item => item.id === product.id);
  };

  //metermos esa función en una variable que será true o false
  const isProductInCart = checkProductInCart(productData);

  return (
    <main>
      <div className="product">
        <img src={productData.thumbnail} alt={productData.title} />
        <div>
          <strong>{productData.title}</strong> - ${productData.price}
        </div>
        <div>{productData.brand}</div>
        <div>{productData.description}</div>
        <div>Rating: {productData.rating}</div>
        <button
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
    </main>
  );
}

export default DetailProduct;
