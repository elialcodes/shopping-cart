import { useParams } from 'react-router-dom';

interface DetailProductProps {
  products: AllProducts;
}

function DetailProduct({ products }: DetailProductProps): JSX.Element {
  const { id } = useParams<{ id: string }>();

  //convertir "id" a número sólo si está definido
  const productId = id ? parseInt(id) : null;

  //verificar si productId es válido antes de buscar el producto
  const productData = productId
    ? products.find(product => product.id === productId)
    : null;

  //renderizar un mensaje o un componente diferente si "productData" es null
  if (!productData) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
      <div className="product">
        <img src={productData.thumbnail} alt={productData.title} />
        <div>
          <strong>{productData.title}</strong> - ${productData.price}
        </div>
        <div>{productData.brand}</div>
        <div>{productData.description}</div>
        <div>Rating: {productData.rating}</div>
      </div>
    </>
  );
}

export default DetailProduct;
