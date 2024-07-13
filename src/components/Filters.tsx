import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';
import '../styles/Filters.css';

function Filters() {
  //no pasamos nada por props, de nuestro hook nos traemos los valores de filters
  //y setFilters, que se su vez los obtiene del context, asi accedemos al estado global
  //TAMBIÉN FUNCIONA SI DESDE ESTE COMPONENTE ACCEDEMOS DIRECTAMENTE AL
  //USECONTEXT Y NO UTILIZAMOS EL CUSTOM HOOK
  const { filters, setFilters } = useFilters();

  //usamos useId para hacer únicos los ids de los inputs, no requiere de argumentos
  //ni nada y genera aleatoriamente un string que siempre será el mismo
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  //función majedora para setear el valor del filtro minPrice
  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    //con spreed tomamos el valor de filters y sólo sobreescribimos la propiedad minPrice
    setFilters({
      ...filters,
      minPrice: Number(event.target.value),
    });
  };

  //función manejadora para setear el estado del filtro category
  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    //con spreed tomamos el valor de filters y sólo sobreescribimos la propiedad category
    setFilters({
      ...filters,
      category: event.target.value,
    });
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="2000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>$ {filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          name="category"
          id={categoryFilterId}
          value={filters.category}
          onChange={handleChangeCategory}
        >
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
