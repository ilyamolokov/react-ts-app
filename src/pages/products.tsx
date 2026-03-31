import { api } from "@/api";
import { ProductsTable } from "@/components/products/products-table";
import { SearchProducts } from "@/components/products/search-products";
import { useDebounce } from "@/hooks/use-debounce";
import { useURLParamsData } from "@/hooks/use-url-params-data";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent } from "react";

export const ProductsPage = () => {
  const { search, setSearch, sortBy, order } = useURLParamsData();
  const debouncedSearch = useDebounce(search, 500);

  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["getProducts", debouncedSearch, sortBy, order],
    queryFn: () => {
      if (debouncedSearch) {
        return api.searchProducts({
          q: debouncedSearch,
          ...(sortBy && { sortBy }),
          ...(order && { order }),
        });
      } else {
        return api.getProducts({
          limits: 0,
          ...(sortBy && { sortBy }),
          ...(order && { order }),
        });
      }
    },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full">
      <div className="pt-[22.5px] w-full">
        <SearchProducts
          disabled={isFetching}
          value={search}
          onChange={handleInputChange}
        />
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
