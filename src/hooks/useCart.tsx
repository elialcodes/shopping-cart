import { useContext } from 'react';
import { CartContext } from '../context/cartContext.tsx';

export function useCart() {
  const cart = useContext<CartContextType>(CartContext);
  return cart;
}
