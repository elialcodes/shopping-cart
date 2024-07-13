import { useState } from 'react';
import Products from './mocks/products.json';
import { useFilters } from './hooks/useFilters.tsx';
import { CartProvider } from './context/cartContext.tsx';
import Cart from './components/Cart.tsx';
import Header from './components/Header.tsx';
import ListProducts from './components/ListProducts.tsx';

function App(): JSX.Element {
  //metemos en un estado el listado del JSON, sin función de setear pues en
  //principio no se va a manipular este estado, con el custom hook useFilters
  //lo manipularemos y obtendremos un array filtrado que es el que se renderizará
  const [products] = useState<AllProducts>(Products);

  //llamamos a función del hook que hace el filtado:
  const { filterProducts } = useFilters();

  //metemos la función de filtrar en una constante para tener ahí
  //el array que devuelve la función al ejecutarse con products de argumento
  //este array será el que rendericemos
  const filteredProducts = filterProducts(products);

  return (
    //envolvemos con CartProvider para que su children tenga acceso a ese
    //context (CartContext), no necesitamos envolver la App, hay otro scope
    <CartProvider>
      <Cart />
      <Header />
      <ListProducts products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
