import { useContext } from 'react';
import { CartContext } from '../context/cartContext.tsx';

export function useCart() {
  //importamos lo que hay en el useContext
  const context = useContext<CartContextType>(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
