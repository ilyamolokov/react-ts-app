import { ColumnDef } from "@tanstack/react-table";
import { ProductsTableTitleCell } from "./products-table-title-cell";
import { Icon } from "@/ui/icon";
import { IProduct } from "@/api/responses";
import { formatPrice } from "@/lib/format-price";
import { DASH } from "@/lib/const";
import { Checkbox } from "@/ui/checkbox";
import { DataTableSortableHeader } from "@/ui/data-table-sortable-header";

export const SORTABLE_COLUMNS_LABEL = {
  TITLE: "Наименование",
  BRAND: "Вендор",
  SKU: "Артикул",
  RATING: "Оценка",
  PRICE: "Цена, ₽",
};

export const sortableColumns = {
  TITLE: "title",
  BRAND: "brand",
  SKU: "sku",
  RATING: "rating",
  PRICE: "price",
};

export const productsTableColumns: ColumnDef<IProduct>[] = [
  {
    id: "select-col",
    header: ({ table }) => (
      <Checkbox
        className="border-grey-500"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="border-grey-500"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: sortableColumns.TITLE,
    header: () => (
      <DataTableSortableHeader
        accessorKey={sortableColumns.TITLE}
        label={SORTABLE_COLUMNS_LABEL.TITLE}
      />
    ),
    cell: ({ row }) => (
      <ProductsTableTitleCell
        title={row.original.title}
        category={row.original.category}
        thumbnail={row.original.thumbnail}
      />
    ),
  },
  {
    accessorKey: sortableColumns.BRAND,
    header: () => (
      <DataTableSortableHeader
        accessorKey={sortableColumns.BRAND}
        label={SORTABLE_COLUMNS_LABEL.BRAND}
      />
    ),
    cell: ({ row }) => (
      <p className="font-bold text-[#222222]">{row.original.brand ?? DASH}</p>
    ),
  },
  {
    accessorKey: sortableColumns.SKU,
    header: () => (
      <DataTableSortableHeader
        accessorKey={sortableColumns.SKU}
        label={SORTABLE_COLUMNS_LABEL.SKU}
      />
    ),
    cell: ({ row }) => (
      <p className="text-[#222222] font-roboto">{row.original.sku}</p>
    ),
  },
  {
    accessorKey: sortableColumns.RATING,
    header: () => (
      <DataTableSortableHeader
        accessorKey={sortableColumns.RATING}
        label={SORTABLE_COLUMNS_LABEL.RATING}
      />
    ),
    cell: ({ row }) => {
      const rating = row.original.rating;
      return (
        <p className="text-[#222222] font-roboto">
          <span className={rating < 3.5 ? "text-red-400" : "text-[#222222]"}>
            {rating}
          </span>
          {"/5"}
        </p>
      );
    },
  },
  {
    accessorKey: sortableColumns.PRICE,
    header: () => (
      <DataTableSortableHeader
        accessorKey={sortableColumns.PRICE}
        label={SORTABLE_COLUMNS_LABEL.PRICE}
      />
    ),
    cell: ({ row }) => {
      const { dollars, cents } = formatPrice(row.original.price);
      return (
        <p className="text-[#222222] font-roboto">
          {dollars}
          <span className="text-[#999999]">,{cents}</span>
        </p>
      );
    },
  },
  {
    accessorKey: "settings",
    header: "",
    cell: () => {
      return (
        <div className="flex justify-center items-center gap-8">
          <div className="text-white bg-blue-400 rounded-full min-w-[52px] min-h-[27px] flex justify-center items-center">
            <Icon name="plus" />
          </div>
          <Icon name="circle-dots-three" size={32} />
        </div>
      );
    },
  },
];
