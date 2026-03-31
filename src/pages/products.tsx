import { api } from "@/api";
import { ProductsTable } from "@/components/products/products-table";
import { SearchProducts } from "@/components/products/search-products";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
// import { useURLParamsData } from "@/hooks/use-url-params-data";
// import { constructParams } from "@/lib/construct-params";

export const ProductsPage = () => {
  // const { page, setPage, perPage } = useURLParamsData();

  const { data, isFetching, error } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => api.getProducts({ limit: 0 }),
    placeholderData: keepPreviousData,
  });

  return (
    <div className="w-full">
      <div className="pt-[22.5px] w-full">
        <SearchProducts disabled={isFetching} />
      </div>
      <div className="h-full pt-7.5 w-full">
        <ProductsTable data={data} isFetching={isFetching} error={error} />
      </div>
    </div>
  );
};
