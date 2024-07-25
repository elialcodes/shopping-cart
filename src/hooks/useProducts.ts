import { useQuery } from '@tanstack/react-query';

const useProduct = () => {
  const { isLoading, data, isError, error } = useQuery<ProductsResponse>({
    queryKey: ['productos'],
    queryFn: async () => {
      const response = await fetch('https://dummyjson.com/products?limit=60');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
  return { isLoading, data, isError, error };
};

export default useProduct;
