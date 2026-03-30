import { ProductsTableContent } from "./products-table-content";
import { ProductsTableHeader } from "./products-table-header";
import { ProductsTableFooter } from "./products-table-footer";

export const ProductsTable = () => {
  return (
    <div className="p-[30px] bg-white space-y-[40px]">
      <ProductsTableHeader />
      <ProductsTableContent />
      <ProductsTableFooter />
    </div>
  );
};
