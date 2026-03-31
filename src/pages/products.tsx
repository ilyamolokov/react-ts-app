import { api } from "@/api";
import { ProductsTable } from "@/components/products/products-table";
import { SearchProducts } from "@/components/products/search-products";
import { useDebounce } from "@/hooks/use-debounce";
import { useURLParamsData } from "@/hooks/use-url-params-data";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent } from "react";

export const ProductsPage = () => {
  const { search, setSearch } = useURLParamsData();
  const debouncedSearch = useDebounce(search, 500);

  const { data, isFetching, error } = useQuery({
    queryKey: ["getProducts", debouncedSearch],
    queryFn: () => {
      if (debouncedSearch) {
        return api.searchProducts({ q: debouncedSearch });
      } else {
        return api.getProducts();
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
        <ProductsTable data={data} isFetching={isFetching} error={error} />
      </div>
    </div>
  );
};
