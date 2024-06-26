import { useContext } from 'react';
import { FiltersContext } from '../context/filtersContext';

//custom hook donde hemos extraído la lógica de los filtros, es una caja negra
//y extraíble para ser reutilizada en otro componente o aplicación

export function useFilters() {
  //metemos aquí el useContext que hemos creado con el estado global de los filtros
  //para tomar los valores de filters y la función que setea los filters
  //con "as" forzamos el tipado
  const { filters, setFilters } = useContext(FiltersContext) as {
    filters: Filters;
    setFilters: (filters: Filters) => void;
  };

  //función que devuelve un array de productos filtrado
  //por precio y/o por categoría
  const filterProducts = (products: AllProducts) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };
  //extraemos los filtros, la función que setea el valor de los filtros
  //y la función de filtrar
  return { filters, filterProducts, setFilters };
}
