import { useContext } from 'react';
import { CartContext } from '../context/cartContext.tsx';

export function useCart() {
  //importamos lo que hay en el useContext
  const cart = useContext<CartContextType>(CartContext);
  return cart;
}
