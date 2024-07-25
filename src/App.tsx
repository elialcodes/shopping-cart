import { useFilters } from './hooks/useFilters.tsx';
import { CartProvider } from './context/cartContext.tsx';
import Cart from './components/Cart.tsx';
import Header from './components/Header.tsx';
import ListProducts from './components/ListProducts.tsx';
import useProduct from './hooks/useProducts.ts';

function App(): JSX.Element {
  //llamamos a los productos que nos devuelve useQuery:
  const { data, isLoading, isError, error } = useProduct();

  console.log(data);
  //llamamos a función del hook que hace el filtado:
  const { filterProducts } = useFilters();

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        {/* TS no nos asegura que Error tenga la instancia error son su propiedad 
        message, así que lo verificamos y si es así, accedemos a message. */}
        Error: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );

  //metemos la función de filtrar en una constante para tener ahí
  //el array que devuelve la función al ejecutarse con products de argumento
  //este array será el que rendericemos
  const filteredProducts = filterProducts(data?.products || []);

  return (
    // envolvemos con CartProvider para que su children tenga acceso a ese
    //   context (CartContext), no necesitamos envolver la App, hay otro scope
    <CartProvider>
      <Cart />
      <Header />
      <ListProducts products={filteredProducts} />
    </CartProvider>
  );
}

export default App;
