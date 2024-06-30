import { createContext, useState, ReactNode } from 'react';

//definimos los tipos del provider
interface CartProviderType {
  children: ReactNode;
}

//HACEMOS EL CONTEXT:
//1. CREAMOS EL CONTEXTO a consumir, lo tipamos y su valor será undefined por defecto
export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

//2. CREAMOS EL PROVIDER, metemos aquí todo lo que queramos que sirva el context
//(un estado y las funciones addToCart, removeFromCart y clearCart) para
//que lo usen los componentes que lo necesiten.
export function CartProvider({ children }: CartProviderType) {
  const [cart, setCart] = useState<AllProducts>([]);

  const addToCart = (product: Product) => {
    //cuando añadamos un producto, bien desde la lista de productos bien desde el carrito,
    //buscaremos si el objeto a añadir ya está en el carrito (buscamos si hay índice
    //coindicente) si no hay coincidencias, devolvería -1
    const productInCartIndex = cart.findIndex(item => item.id === product.id);
    if (productInCartIndex !== -1) {
      //structuredClone hace copias de array y objetos como spreed pero más profundas,
      //es útil si el array que queremos clonar es pequeño
      const newCart = structuredClone(cart);
      //como el producto está en el carrito, le podemos añadir una cantidad
      const item = newCart[productInCartIndex];
      if (item.quantity !== undefined && item.quantity >= 1) {
        item.quantity += 1;
      }
      return setCart(newCart);
    } else {
      //si es -1, no hay coincidencias, asi que devolvemos el estado anterior
      //añadiendo el producto nuevo y le dejamos con cantidad 1
      setCart(prevState => [...prevState, { ...product, quantity: 1 }]);
    }
  };

  //función para decrementar la cantidad en el carrito
  const decrementQuantityFromCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id);
    if (productInCartIndex !== -1) {
      //structuredClone hace copias de array y objetos como spreed pero más profundas,
      //es útil si el array que queremos clonar es pequeño
      const newCart = structuredClone(cart);
      //como el producto está en el carrito, le podemos añadir una cantidad
      const item = newCart[productInCartIndex];
      if (item.quantity !== undefined && item.quantity > 1) {
        item.quantity -= 1;
      }
      return setCart(newCart);
    } else {
      //si es -1, no hay coincidencias, asi que devolvemos el estado anterior
      //añadiendo el producto nuevo y le dejamos con cantidad 1
      setCart(prevState => [...prevState, { ...product, quantity: 1 }]);
    }
  };

  //función para borrar todo el carrito, seteamos el estado con un array de
  //productos filtrados cuyo id no coincide con el seleccionado
  const removeFromCart = (product: Product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id));
  };

  //función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        decrementQuantityFromCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//3. los elementos que lo necesiten se importarán el useContext y consumirán
//lo que hay en este useContext.
