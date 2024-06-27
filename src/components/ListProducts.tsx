import '../styles/ListProducts.css';
import { AddToCartIcon } from './icons';
import { useCart } from '../hooks/useCart.tsx';

interface LisProductsProps {
  products: AllProducts;
}

function ListProducts({ products }: LisProductsProps) {
  const { addToCart } = useCart();
  return (
    <main className="products">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <button
              onClick={() => {
                addToCart(product);
              }}
            >
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ListProducts;
