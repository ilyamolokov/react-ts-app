import { Button } from "@/ui/button";
import { Icon } from "@/ui/icon";
import { ProductsTableSortDropdown } from "./products-table-sort-dropdown";

export const ProductsTableHeader = ({ refetch }: { refetch: () => void }) => {
  // const { setSortBy, setOrder } = useURLParamsData();

  // const reset = async () => {
  //   await setSortBy("");
  //   await setOrder("");
  // };

  return (
    <div className="w-full flex items-center justify-between">
      <h4 className="text-black text-[20px] font-semibold">{"Все позиции"}</h4>

      <div className="flex items-center gap-2">
        <Button size="icon" onClick={refetch}>
          {<Icon name="refresh" size={22} />}
        </Button>
        <ProductsTableSortDropdown />
        <Button variant="primary" size="sm">
          <Icon name="circle-plus" size={22} />
          {"Добавить"}
        </Button>
      </div>
    </div>
  );
};
