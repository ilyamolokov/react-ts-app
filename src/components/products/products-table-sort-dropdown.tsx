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

export const ProductsTableSortDropdown = () => {
  const sortableColumnsKeys = Object.keys(
    sortableColumns,
  ) as (keyof typeof sortableColumns)[];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-[42px] h-[42px] flex justify-center items-center rounded-[8px] text-grey bg-white border border-[#ECECEB] transition-all duration-300 hover:cursor-pointer hover:bg-white/85">
          <Icon name="sort" size={22} />
        </div>
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
