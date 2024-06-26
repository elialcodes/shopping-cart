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
//los componentes que lo necesiten: tomamos el contexto creado, accedemos a
//su función .Provider y tiene que envolver lo que sea que
//le pasamos como children
export function FiltersProvider({ children }: FiltersProviderType) {
  //en este contexto en concreto hemos creado un estado, que pasa a ser global
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

//3. los elementos que lo necesiten se importarán el useContext y consumirán
//este useContext, en esta web, en main.tsx, envolveremos el componente App,
//luego envolvemos toda la aplicación
