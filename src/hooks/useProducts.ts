import { useQuery } from '@tanstack/react-query';

const useProduct = () => {
  const { isLoading, data, isError, error } = useQuery<ProductsResponse>({
    queryKey: ['productos'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/products?limit=0');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
  const productsByCategory =
    data?.products?.filter(product =>
      [
        'beauty',
        'fragrances',
        'skin-care',
        'home-decoration',
        'sunglasses',
        'tops',
        'womens-bags',
        'womens-dresses',
        'womens-jewellery',
        'womens-shoes',
      ].includes(product.category)
    ) || [];

  return { isLoading, data: productsByCategory, isError, error };
};

export default useProduct;
