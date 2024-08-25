import { useContext } from 'react'; //necesario para utilizar el contexto que queramos
import { FiltersContext } from '../context/filtersContext'; //importamos el contexto

//custom hook donde hemos extraído la lógica de los filtros, es una caja negra
//y extraíble que puede ser reutilizada en otro componente o aplicación

export function useFilters() {
  //tomamos del contexto FiltersContext el estado global filtros
  //para conseguir los valores de los inputs de filters y la función que setea
  //los filters. Con "as" forzamos el tipado para evitar el error de TS.
  const { filters, setFilters } = useContext(FiltersContext) as {
    filters: Filters;
    setFilters: (filters: Filters) => void;
  };

  //función que devuelve un array de productos filtrando con 2 condiciones:
  //por precio y por categoría ("all" o una categoría en concreto)
  const filterProducts = (products: AllProducts) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  //función para extraer el precio más alto del array de productos y personalizar
  //el input range hasta ese valor máximo, para que cada vez muestre valores de 0 a x según cómo de filtrados estén
  //los productos estén filtrados
  const higherPrice = (items: Product[]): number => {
    return items.reduce((max, item) => {
      return item.price > max ? item.price : max;
    }, 0);
  };

  //extraemos los filtros, la función que setea el valor de los filtros
  //y la función de filtrar para que se pueda usar en otros componentes
  return { filters, setFilters, filterProducts, higherPrice };
}
