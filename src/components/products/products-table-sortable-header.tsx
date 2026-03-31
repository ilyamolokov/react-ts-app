import { useURLParamsData } from "@/hooks/use-url-params-data";
import { Icon } from "@/ui/icon";

enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export const ProductsTableSortableHeader = ({
  accessorKey,
  label,
}: {
  accessorKey: string;
  label: string;
}) => {
  const { sortBy, setSortBy, order, setOrder } = useURLParamsData();

  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-2"
      onClick={() => {
        setSortBy(accessorKey);
        if (!order) {
          setOrder(SortOrder.ASC);
        } else if (order === SortOrder.ASC) {
          setOrder(sortBy === accessorKey ? SortOrder.DESC : SortOrder.ASC);
        } else if (order === SortOrder.DESC) {
          setOrder(sortBy === accessorKey ? "" : SortOrder.ASC);
          setSortBy(sortBy === accessorKey ? "" : accessorKey);
        }
      }}
    >
      <span>{label}</span>
      {order === SortOrder.ASC && sortBy === accessorKey && <Icon name="asc" />}
      {order === SortOrder.DESC && sortBy === accessorKey && (
        <Icon name="desc" />
      )}
    </div>
  );
};
