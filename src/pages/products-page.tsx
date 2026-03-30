import { ProductsTable } from "@/components/products/products-table";
import { SearchProducts } from "@/components/products/search-products";

export const ProductsPage = () => {
  return (
    <div className="w-full">
      <div className="pt-[22.5px] w-full">
        <SearchProducts />
      </div>
      <div className="pt-[30px] w-full">
        <ProductsTable />
      </div>
    </div>
  );
};
