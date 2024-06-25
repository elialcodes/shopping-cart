import ListProducts from './components/ListProducts.tsx';
import products from './mocks/products.json';

function App(): JSX.Element {
  return (
    <>
      <h1>My Ecommerce</h1>
      <ListProducts products={products.products} />;
    </>
  );
}

export default App;
