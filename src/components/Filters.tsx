import { useState } from 'react';
import '../styles/Filters.css';

interface FiltersProps {
  onChangeFilters: (minPrice: number, category: string) => void;
}

function Filters({ onChangeFilters }: FiltersProps) {
  //estado interno del componente para mostrar al renderizar el valor del rango
  const [minPrice, setMinPrice] = useState<number>(0);

  const handleChangeMinPrice = (event: React.FormEvent<HTMLSpanElement>) => {
    setMinPrice(event.target.value);

    onChangeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onChangeFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }));
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="2000"
          onChange={handleChangeMinPrice}
        />
        {/* renderizamos el estado interno del componente: */}
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Categoría</label>
        <select name="category" id="category" onChange={handleChangeCategory}>
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
