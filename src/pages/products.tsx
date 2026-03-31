import { api } from "@/api";
import { ProductsTable } from "@/components/products/products-table";
import { SearchProducts } from "@/components/products/search-products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const ProductsPage = () => {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => api.getProducts({ limit: 5, skip: 0 }),
    placeholderData: keepPreviousData,
  });

  return (
    <div className="w-full">
      <div className="pt-[22.5px] w-full">
        <SearchProducts disabled={isFetching} />
      </div>
      <div className="h-full pt-7.5 w-full">
        <ProductsTable
          data={data}
          isFetching={isFetching}
          error={error}
          refetch={refetch}
        />
      </div>
    </div>
  );
};
