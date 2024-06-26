import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';
import { useFilters } from './hooks/useFilters.tsx';
import ListProducts from './components/ListProducts.tsx';
import Header from './components/Header.tsx';

function App(): JSX.Element {
  //metemos en un estado el listado del JSON, sin función de setear pues en
  //principio no se va a manipular este estado, con el useFilters lo manipularemos
  //y obtendremos un array filtrado que es el que se renderizará
  const [products] = useState<AllProducts>(initialProducts);

  //llamamos a lo que exporta el customn hook useFilters
  const { filterProducts } = useFilters();

  //metemos la función de filtrar en una constante para tener ahí
  //el array que devuelve
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <ListProducts products={filteredProducts} />
    </>
  );
}

export default App;
