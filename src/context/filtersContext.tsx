import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

//definimos los tipos del contexto
interface FiltersContextType {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

//definimos los tipos de las propiedades del provider
interface FiltersProviderType {
  children: ReactNode;
}

//HACEMOS EL CONTEXT:
//1. creamos el contexto a consumir, lo tipamos y su valor será undefined por defecto
export const FiltersContext = createContext<FiltersContextType | undefined>(
  undefined
);

//2. creamos el provider (el proveedor del context) para que lo usen
//los componentes que lo necesiten:
//- creamos una función con el parámetro children
//- metemos en ella el estado de filtros, que entonces pasará a ser un estado global
//- en el return tomamos el contexto creado, accedemos a su función .Provider,
//  y pasamos por props el estado global para que el children pueda acceder a él
//- el .Provider tiene que envolver lo que sea que le pasemos como children, y en
//  nuestro caso, children será App, es decir, toda la aplicación (ver main.jsx)
export function FiltersProvider({ children }: FiltersProviderType) {
  const [filters, setFilters] = useState<Filters>({
    minPrice: 0,
    category: 'all',
  });
  console.log(filters);
  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

//3. los elementos que lo necesiten se importarán el useContext y consumirán
//este useContext.
