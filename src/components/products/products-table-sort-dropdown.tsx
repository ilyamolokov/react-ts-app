import { DataTableSortableHeader } from "@/ui/data-table-sortable-header";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/ui/dropdown-menu";
import { Icon } from "@/ui/icon";
import {
  SORTABLE_COLUMNS_LABEL,
  sortableColumns,
} from "./product-table-columns";
import { Button } from "@/ui/button";

export const ProductsTableSortDropdown = () => {
  const sortableColumnsKeys = Object.keys(
    sortableColumns,
  ) as (keyof typeof sortableColumns)[];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Icon name="sort" size={22} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[155px]">
        <DropdownMenuGroup>
          {sortableColumnsKeys.map((key) => (
            <DropdownMenuItem key={key} onClick={(e) => e.preventDefault()}>
              <DataTableSortableHeader
                accessorKey={sortableColumns[key]}
                label={SORTABLE_COLUMNS_LABEL[key]}
              />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
