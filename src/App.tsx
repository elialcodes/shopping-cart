import { Routes, Route } from 'react-router-dom';
import { useFilters } from './hooks/useFilters.ts';
import useProduct from './hooks/useProducts.ts';
import { CartProvider } from './context/cartContext.tsx';
import Cart from './components/Cart.tsx';
import Header from './components/Header.tsx';
import ListProducts from './components/ListProducts.tsx';
import DetailProduct from './components/DetailProduct.tsx';

function App(): JSX.Element {
  //tomamos lo que nos interesa de useQuery
  const { data } = useProduct();

  //tomamos lo que nos interesa del hook useFilters
  const { filterProducts, higherPrice } = useFilters();

  //metemos la función de filtrar en una constante para tener ahí
  //el array que devuelve la función al ejecutarse con products de argumento
  //este array le pasamos por props al componente ListProducts.tsx
  const filteredProducts = filterProducts(data || []);

  //metemos la función que devuelve el precio más alto en una constante y se pasa
  //por props al componente ListProducts.tsx
  const maxValueInputRange = higherPrice(filteredProducts);

  return (
    //envolvemos con CartProvider para que su children tenga acceso a ese
    //context (CartContext), no necesitamos envolver la App, hay otro scope
    <CartProvider>
      <Header />
      <Cart />
      <Routes>
        <Route
          path="/"
          element={
            <ListProducts
              products={filteredProducts}
              maxPrice={maxValueInputRange}
            />
          }
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
