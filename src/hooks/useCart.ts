import { useContext } from 'react'; //necesario para utilizar el contexto que queramos
import { CartContext } from '../context/cartContext.tsx';

export function useCart() {
  //importamos lo que hay en el useContext
  const context = useContext<CartContextType | undefined>(CartContext);

  //es buena práctica poner un condicional por si el contexto no
  //estuviera bien elaborado
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  //si todo está correcto, devolvemos el contexto
  return context;
}
