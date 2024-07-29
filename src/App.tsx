import { Routes, Route } from 'react-router-dom';
import { useFilters } from './hooks/useFilters.tsx';
import { CartProvider } from './context/cartContext.tsx';
import Cart from './components/Cart.tsx';
import Header from './components/Header.tsx';
import ListProducts from './components/ListProducts.tsx';
import DetailProduct from './components/DetailProduct.tsx';
import CartButton from './components/CartButton.tsx';
import useProduct from './hooks/useProducts.ts';

function App(): JSX.Element {
  //tomamos lo que nos interesa de useQuery
  const { data } = useProduct();

  console.log(data);

  //llamamos a función del hook que hace el filtado
  const { filterProducts } = useFilters();

  //metemos la función de filtrar en una constante para tener ahí
  //el array que devuelve la función al ejecutarse con products de argumento
  //este array será el que rendericemos
  const filteredProducts = filterProducts(data?.products || []);

  return (
    // envolvemos con CartProvider para que su children tenga acceso a ese
    // context (CartContext), no necesitamos envolver la App, hay otro scope
    <CartProvider>
      <CartButton />
      <Cart />
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ListProducts products={filteredProducts} />}
        />
        <Route
          path="/detailProduct/:id"
          element={<DetailProduct products={filteredProducts} />}
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
