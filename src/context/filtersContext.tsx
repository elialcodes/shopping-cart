/* eslint-disable react/react-in-jsx-scope */
import { createContext, useState, ReactNode } from 'react';

//definimos los tipos de las propiedades del provider
interface FiltersProviderType {
  children: ReactNode;
}

//HACEMOS EL CONTEXT:
//1. CREAMOS EL CONTEXTO a consumir, lo tipamos y su valor será undefined por defecto
export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

//2. CREAMOS EL PROVIDER (el proveedor del context) para que lo usen
//los componentes que lo necesiten:
//- creamos una función con el parámetro children como props
//- metemos en ella el estado de filtros, y entonces estos valores pasarán a ser
//  un estado global
//- en el return tomamos el contexto creado, accedemos a su función .Provider,
//  y pasamos por props el estado global para que el children pueda acceder a él
//- el .Provider tiene que envolver lo que sea que le pasemos como children, y en
//  nuestro caso, children será App, es decir, toda la aplicación (ver main.jsx)
export function FiltersProvider({ children }: FiltersProviderType) {
  const [filters, setFilters] = useState<Filters>({
    minPrice: 0,
    category: 'all',
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

//3. los elementos que lo necesiten (sus children) se importarán el useContext y
//consumirán este useContext.
