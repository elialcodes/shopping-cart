import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';
import '../styles/Filters.css';

function Filters() {
  //de nuestro hook nos traemos los valores de filters y setFilters,
  //nada ha sido pasado por props, porque a través del hook, que tiene el context,
  //accedemos el estado global
  //TAMBIÉN FUNCIONA SI DESDE ESTE COMPONENTE ACCEDEMOS DIRECTAMENTE AL
  //USECONTEXT Y NO UTILIZAMOS EL CUSTOM HOOK
  const { filters, setFilters } = useFilters();

  //usamos useId para hacer únicos los ids de los inputs, no requiere de argumentos
  //ni nada y genera aleatoriamente un string que siempre será el mismo
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  //función para setear el valor del filtro minPrice
  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    //con spreed tomamos el valor de filters y sólo sobreescribimos la propiedad minPrice
    setFilters(prevState => ({
      ...prevState,
      minPrice: Number(event.target.value),
    }));
  };

  //función para setear el estado del filtro category
  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    //con spreed tomamos el valor de filters y sólo sobreescribimos la propiedad category
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }));
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
          <option value="home-decoration">Home Decoration</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragances</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}

export default Filters;
