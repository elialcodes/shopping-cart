import { useState } from 'react';
import ListProducts from './components/ListProducts.tsx';
import { products as initialProducts } from './mocks/products.json';

function App(): JSX.Element {
  const [products, setProducts] = useState<AllProducts>(initialProducts);
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });

  const filterProducts = (products: AllProducts) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  //metemos la función en una constante
  const filteredProducts = filterProducts(products);
  return (
    <>
      <h1>My Ecommerce</h1>
      <ListProducts products={filteredProducts} />;
    </>
  );
}

export default App;
