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
//(dos estados y las funciones addToCart, decrementQuantityFromCart, removeFromCart
//y clearCart) para que lo usen los componentes que lo necesiten.
export function CartProvider({ children }: CartProviderType) {
  const [cart, setCart] = useState<AllProducts>([]);
  const [showedCart, setShowedCart] = useState<boolean>(false);

  const addToCart = (product: Product) => {
    //cuando hagamos click en un producto (desde la lista de productos o desde el
    //botón + del carrito), buscaremos si el objeto a añadir ya está en el carrito:
    //si no lo está lo añade y si ya está en el carrito añade una cantidad más
    const productInCartIndex = cart.findIndex(item => item.id === product.id);

    if (productInCartIndex === -1) {
      //si el índice es  -1, no hay coincidencias, asi que devolvemos el estado
      //anterior añadiendo el producto nuevo y le ponemos cantidad 1
      setCart(prevState => [...prevState, { ...product, quantity: 1 }]);
    } else {
      //structuredClone hace copias de array y objetos como spreed pero más profundas,
      //es útil si el array que queremos clonar es pequeño
      const newCart = structuredClone(cart);
      const item = newCart[productInCartIndex]; //constante con el producto concreto
      //como el producto está en el carrito, le podemos añadir una cantidad
      //(quantity es una propiedad opcional, luego su tipo es number o undefined)
      if (item.quantity !== undefined && item.quantity >= 1) {
        item.quantity += 1;
      }
      return setCart(newCart);
    }
  };

  //función para decrementar la cantidad en el carrito, parecida a la anterior
  const decrementQuantityFromCart = (product: Product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id);
    const newCart = structuredClone(cart);
    const item = newCart[productInCartIndex]; //constante con el producto concreto
    if (item.quantity !== undefined && item.quantity > 1) {
      item.quantity -= 1;
      return setCart(newCart);
    }
  };

  //función para borrar el producto, de la lista y del carrito de forma sincronizada,
  //seteamos el estado con un array de productos filtrados cuyo id no coincide
  const removeFromCart = (product: Product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id));
  };

  //función para limpiar el carrito completo y esconderlo
  const clearCart = () => {
    setCart([]);
    setShowedCart(false);
  };

  //función para abrir o esconder el carrito
  const displayCart = () => {
    if (showedCart) {
      setShowedCart(false);
    } else setShowedCart(true);
  };

  //con un reduce calculamos el total de unidades del carrito
  const totalUnitCart = cart.reduce((acc, product) => {
    return acc + (product.quantity || 0);
  }, 0);

  //en el return envolvemos dentro del contexto y su método provider, los componentes
  //que lo necesiten (será su children, el que sea) para que puedan acceder a el contexto
  return (
    <CartContext.Provider
      value={{
        cart,
        showedCart,
        totalUnitCart,
        setCart,
        addToCart,
        decrementQuantityFromCart,
        removeFromCart,
        clearCart,
        displayCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//3.los componentes se importarán el useContext y consumirán lo que hay en él
