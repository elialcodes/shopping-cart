import { useParams } from 'react-router-dom';
import '../styles/DetailProduct.css';

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
      </div>
    </main>
  );
}

export default DetailProduct;
