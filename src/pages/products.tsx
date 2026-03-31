import { api } from "@/api";
import { ProductsTable } from "@/components/products/products-table";
import { ProductsSearch } from "@/components/products/products-search";
import { useDebounce } from "@/hooks/use-debounce";
import { useURLParamsData } from "@/hooks/use-url-params-data";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { IProduct } from "@/api/responses";

export const ProductsPage = () => {
  const { search, setSearch, sortBy, order } = useURLParamsData();
  const debouncedSearch = useDebounce(search, 500);

  const [clientProductsData, setClientProductsData] = useState<IProduct[]>([]);

  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["getProducts", debouncedSearch, sortBy, order],
    queryFn: () =>
      api.getProducts({
        ...(debouncedSearch && { q: debouncedSearch }),
        ...(sortBy && { sortBy }),
        ...(order && { order }),
      }),
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const addClientProduct = (product: IProduct) => {
    setClientProductsData((prev) => [product, ...prev]);
  };

  return (
    <div className="w-full">
      <div className="pt-[22.5px] w-full">
        <ProductsSearch value={search} onChange={handleInputChange} />
      </div>
      <div className="h-full pt-7.5 w-full">
        <ProductsTable
          data={data}
          clientProductsData={clientProductsData}
          isFetching={isFetching}
          error={error}
          refetch={refetch}
          addClientProduct={addClientProduct}
        />
      </div>
    </div>
  );
};
