interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string | undefined;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
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

interface CartContextType {
  cart: AllProducts;
  setCart: Dispatch<SetStateAction<AllProducts>>;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  decrementQuantityFromCart: (product: Product) => void;
  clearCart: () => void;
}
