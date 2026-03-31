import { Button } from "@/ui/button";
import { Icon } from "@/ui/icon";
import { ProductsTableSortDropdown } from "./products-table-sort-dropdown";
import { AddProductDialog } from "./add-product-dialog";
import { IProduct } from "@/api/responses";

export const ProductsTableHeader = ({
  refetch,
  addClientProduct,
}: {
  refetch: () => void;
  addClientProduct: (product: IProduct) => void;
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h4 className="text-black text-[20px] font-semibold">{"Все позиции"}</h4>

      <div className="flex items-center gap-2">
        <Button size="icon" onClick={refetch}>
          {<Icon name="refresh" size={22} />}
        </Button>
        <ProductsTableSortDropdown />
        <AddProductDialog addClientProduct={addClientProduct} />
      </div>
    </div>
  );
};
