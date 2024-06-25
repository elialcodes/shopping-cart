import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';
import ListProducts from './components/ListProducts.tsx';
import Header from './components/Header.tsx';

function App(): JSX.Element {
  const [products, setProducts] = useState<AllProducts>(initialProducts);
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all',
  });

  //función para filtrar productos por precio y/o por categoría
  const filterProducts = (products: AllProducts) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  //metemos la función de filtrar en una constante
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header onChangeFilters={setFilters} />
      <ListProducts products={filteredProducts} />
    </>
  );
}

export default App;
