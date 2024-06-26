interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

type AllProducts = Product[];

interface Filters {
  minPrice: number;
  category: string;
}

interface FiltersContextProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}
